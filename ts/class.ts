class employee{
    #id:number;
    #name:string;
    #email:string;
    constructor(id:number,name:string,email:string){
        this.#id=id;
        this.#name=name;
        this.#email=email;
    }

    getNameWithAddress():string{
        // console.log(this.name+this.email)
        return `${this.#name}'s email is ${this.#email}`
    }
}
class manager extends employee{
    constructor(id:number,name:string,email:string){
        super(id,name,email)
    }
}



let tahmid=new manager(1,"tahmid","tahmid73@gmail.com");
let detailsOfTahmid=tahmid.getNameWithAddress();
console.log(tahmid.getNameWithAddress())
console.log(detailsOfTahmid)