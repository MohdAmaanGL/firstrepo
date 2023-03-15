let a = "xyz";
a="yx";
console.log(a);

// const b = "amaan"
// b="muhai";
// console.log(b);


// PRIYANSHU PIRO CODER 
// --> HE IS IMMUTABLE  
// --> AND UNSTOPPABLE

let firstName = 'Amaan';
let lastName ='Khan';
console.log(firstName+' '+lastName);

let age = 999;
let birthdate= new Date();

let person = {
firstName:'Amaan',
lastName:'Aijaz'
}

console.log(person.firstName+' '+person.lastName);
console.log(firstName+' '+age);
//Amaan Pro Coder
const person2={
firstName:'Amaan',
lastName : 'Khan'
}



person2.firstName = 'Mohd';
console.log(person2);
//person2 ={};
//Amaan Pro Coder
let squareofNumber  = function(value){
return value*value;
}

console.log(squareofNumber(25));
var i=0
for(var x=1;x<=10;x++){ //global
console.log(x);
}



let person={
    firstName : 'Tanishka',
    lastName : 'Sati',
    course : 'React',
    currentDate : new Date()
    }
    
    // const firstName  = person.firstName;
    // const lastName = person.lastName;
    // const course  = person.course;
    
    const {firstName,lastName,course} = person; // properties should have same name
    console.log(firstName);
    
    
    getAddress = () =>{
    return {
    block : 'bf block',
    state : 'delhi',
    country : 'India'
    };
    
    }
    
    const {block,state} = getAddress();
    
    console.log(block);
    
    printName =  (person) =>{
    console.log(person.firstName);    
    }
    
    printName2 = ({firstName}) =>  {
    console.log(firstName);
    }
    
    printName2(person);
    
    const arr = [1,2,3,4];
    const [first,second,,fourth]= arr;
    
    console.log(fourth);
    
    
    
    
    
    