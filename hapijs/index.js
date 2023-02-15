'use strict';

const Hapi = require('@hapi/hapi');
const { Client,Pool } = require('pg')
 
const client = () => {
  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'tahmid',
    password:'123',
    database: 'users'
  })
  return pool;
}

const handle_request = async (query) => {

  let data = '';

  let pool = client();
  pool.connect((err, client, done) => {
    console.log('connected')
  })

  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })
  console.log('query: ' + query)
  let res = await pool.query(query).then("done")
  console.log(res.rows)
  return {data: res.rows[0]}
 }

//adding user 
const addUser = async (username, password) => {
  let query= `INSERT INTO public.user(username, password) VALUES ('${username}', '${password}')`
  console.log(query)
  await handle_request(query)
}
//login user  
const loginUser =async (username, password) => {
  let query = `SELECT username, password FROM public.user WHERE username = '${username}' AND password = '${password}'`
  const result= await handle_request(query)
  if(result.data=[]){
    return false
  }
  else if(result.data.username == username && result.data.password == password){
    return true
  }
  else{
    return false
  }
}

const start = async () => {

    const server = Hapi.server({ port: 3000 });
    server.route([{
        method: 'GET',
        path: '/',
        handler: async (request, h) => {
          console.log('request received')
          let res = await handle_request('SELECT id FROM public.user')
          return h.response({data: res.data})
          }
      },
      {
        method: 'GET',
        path: '/api/users',
        handler: async (request, h) => {
          console.log('request received')
          let res = await handle_request('SELECT username,password FROM public.user')
          return h.response({data: res.data})
          }
        },
        {
          method: 'POST',
          path: '/api/addUser',
          handler: async (request, h) => {
            console.log('request received')
            let res = await loginUser(request.payload.username, request.payload.password)
            return h.response({data: res})
          }
        },
        {
          method: 'POST',
          path: '/api/login',
          handler: async (request, h) => {
            let res = await loginUser(request.payload.username, request.payload.password)
            if(res == true){
              return h.response({data: "login successful"})
            }
            else{
              return h.response({data: "login failed"})
            }
          }
        }
    ]);

    await server.start();

    console.log('server running at: ' + server.info.uri);
};

start();