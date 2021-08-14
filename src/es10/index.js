//flat for array

let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array)
console.log(array.flat())

//flat map

let array = [1,2,3,4,5]
console.log(array)
console.log(array.flatMap(value =>[value,value*2]))

//trimstart

let hello = '                hello world';
console.log(hello)
console.log(hello.trimStart())

//trim end


let hello = '                hello world               ';
console.log(hello)
console.log(hello.trimEnd())

//try-catch withou specify catch

try{

}catch{
    error
}
//object from entries
let entries =[["name","Johan"],["age",32]]
console.log(Object.fromEntries(entries))

//mySymbol

let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol);
console.log(symbol.description)
