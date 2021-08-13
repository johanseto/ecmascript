function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || "COL"
    console.log(name,age,country);



}


//es6

function newFunction2(name = "oscar",age=32,country="COL")
{
    console.log(name,age,country);
}

newFunction()
newFunction2()
newFunction2('ricardo',23,"Mx")

//
let hello = "hello";
let world = "world";

let epicPhrase = hello+ ' '+ world;

console.log(epicPhrase)

//templates
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)


let lorem = "una frase epica   \n"
+ "otra frase epica"

console.log(lorem)

let lorem2 = `otra muy crazy epica 
ahora otra frase epica`;

console.log(lorem2)

let person ={
    'name':'oscar',
    'age':'32',
    'country':'MX'
}

console.log(person.name,person.age)

let {name,age,country} = person; //desestrcuture the elements ma niggy, omg.
console.log(name,age,country);


//Join elemnts
let team1 = ['oscar','Julian','Ricardo']
let team2 = ['Valeria','Yesica','Camila']

let education = ['David',...team1,...team2]

console.log(education)

//Creating objets

let name = 'oscar';
let age = 32 ;

obj = {name:name, age : age};
console.log(obj)

obj2 = {name,age}
console.log(obj2)


////////////defin functions xD
const names = [
    {name: 'Oscar' ,age:32},
    {name: 'Yesica' ,age:27}
]

let listOfNames = names.map(function(item){
    console.log(item.name);


})

const names = [
    {name: 'Oscar' ,age:32},
    {name: 'Yesica' ,age:27}
]

let  listOfNames2 = names.map(item => console.log(item.name));

//void function??
listOfNames2



const listOfNames3 =(name,age,county) =>{
    return name
}

a = listOfNames3('hola',32,'mex')
console.log(a)


const listOfNames4 = name=>{
    console.log(name)
}
listOfNames4('papi')


const square = num =>num*num;

console.log(square(2))

//Promises..somethign gonna happen

const helloPromise =() =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey!');
        }else{
            reject('ups');
        }
    }
    )
}

helloPromise()
.then(response =>console.log(response))
.then(()=>console.log('Hola'))
.catch(error =>console.log(error))


