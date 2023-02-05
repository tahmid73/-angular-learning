interface User {
    name: string;
    age: number;
    id: number;
    email: string;
}



function userDetails(user: User): User {
    console.log(user.name)
    console.log(user.age)
    console.log(user.id)
    console.log(user.email)

    return user
}


let result = userDetails({name: "tahmid", age: 20, id: 12, email: "tahmid@gmail.com"})
userDetails({ name: "tahmid", age: 20, id: 12, email: "tahmid@gmail.com" })

console.log(result.name)