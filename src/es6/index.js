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

