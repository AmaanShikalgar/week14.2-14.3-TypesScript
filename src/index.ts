interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
}

type UpdateProps = Pick<User , 'name' | 'age' | 'email'>

type PartialProps = Partial<UpdateProps> 

const updateUser = (user: PartialProps)=>{
    console.log(`Name: ${user.name},Email: ${user.email}`);
};

updateUser({
    name:"amaan"
})


type Obj = {
    readonly name:string;
    readonly age:number
}

const obj:Obj = {
    name:'john',
    age:23,
}


