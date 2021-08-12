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