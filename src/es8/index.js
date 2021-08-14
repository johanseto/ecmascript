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