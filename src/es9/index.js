import hello from "../es6/module3";

//desestruct
const obj = {
    name:'oscar',
    age:32,
    counrty: 'Mx',

}

let { name,...all} = obj;
console.log(name);
console.log(all);

const obj = {
    name:'oscar',
    age:32,
    

}
//propagtion operator
const obj1 = {
    ...obj,
    counrty: 'Mx',

}
console.log(obj1)

//promise finally

const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        //? resolve('Hello Wolrd')
        ?setTimeout(()=>resolve('Hello Wolrd'),3000)
        : reject(new Error('Test error'));
    });
};

helloWorld()
    .then(response =>console.log(response))
    .catch(error => console.log(error))
    .finally(()=>console.log("finalizo"))

//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/


const match = regexData.exec('2021-09-17');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month,day)
console.log(match)
console.log(regexData)
console.log(typeof(regexData))