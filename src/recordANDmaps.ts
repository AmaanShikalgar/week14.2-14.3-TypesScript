type User={
    name:string;
    age:number;
    email:string;
}

const users = new Map<string,User>()
users.set("21323", {age:21,name:"amaan",email:"adasdas"})
users.set("23232", {age:20,name:"rohan",email:"asdeege"})

const user = users.get("21323")
users.delete('23232')

console.log(user)