//make a matrix xD

const data = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design :'Ana',

}

const entries = Object.entries(data);
console.log(entries)


console.log(entries.length)

//values

const data = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design :'Ana',

}

const values = Object.values(data)
console.log(values)

//padding

const string = 'hello';

console.log(string.padStart(41,'hi'))
console.log(string.padEnd(12,'_'))
console.log(string.padEnd(12,' -----'))

//trailing commas
const obj ={
    name:'Pedro',
}


//async /await

const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (false)
        ? setTimeout(() =>resolve('Hello world'),3000)
        : reject (new Error('test error'))
    })
}

const helloAsync = async () =>{
    const hello =  await helloWorld();
    
    console.log(hello);
}

helloAsync()

//another way

const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() =>resolve('Hello world'),3000)
        : reject (new Error('test error'))
    })
}

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch (error) {
        console.log(error)
    }
}

anotherFunction()