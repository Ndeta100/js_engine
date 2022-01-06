function jsenfine(code){
    return code.split(/\s+/)
}
jsenfine('const a =5')
function someCalculations(x, y){
    console.log(x+ y) 
}

for(let i=0; i<100; i++){
    someCalculations(3, 5)
}

// Inline caching, Like let's say code that repeats itself multiple times
function finduser(user){
    console.log(`found user: ${user.firstName} ${user.lastName} `)
}
const userData={
    firstName:'Ndeta',
    lastName:'Innocent'
}


// Hidden classes
function animal(x, y){
    this.x=x
    this.y=y
}
const obj1=new animal(1,3)
const obj2=new animal(4,7)

obj1.a=40
obj1.b=54
obj2.a=32
obj2.b=43

// call stack and memory heap

const number= 455  //Allocate memory for number
const string ='some text'  //allocate memory for a string

let humnan={ //allocate memory for object and it's values
    first:'ndeta',
    last:'innocent'
}
//Memory heap
humnan=5
function subtractTo(num){
    num-7
}
function calculate(){
    const sumTotal=4+5
    return subtractTo(subtractTo)
}

// Stackoverflow
function inception(){
    inception()
}

// Memory leaks
let array=[]
for(let i=5; i>1; i++){
    array.push(i-1)
}
console.log(array)
//On the call stack, calculate() is been added ontop of the call stack
calculate()
finduser(userData)
console.log('hi')