//print
console.log("Hello World!")


//data types
num=12;
str="hello"
bol=true;
bigint=2453563367;

console.log(num)

console.log("Mona")

//undefined


//var let constant

var namee="mona";
console.log(namee)

var age=19;
console.log(age)

var namee="prathibha";
console.log(namee)

const nam="suvarchala";
console.log(nam)

//function
function getname(name){
    return "welcome "+name +"good mrng";
}
let welcomemsg=getname(namee);
console.log(welcomemsg)

let addage=age+2;
let subage=age-2;
let mulage=age*2;
let divage=age/2;

console.log(addage)
console.log(subage)
console.log(mulage)
console.log(divage)

function rectangle(len,wid){
    return len*wid;
}
let getrectangle=rectangle(2,3);
console.log("area of rectangle : ",getrectangle)

function fact (n){
    let f=1;
    for(i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}
let getfact=fact(5);
console.log("factorial is : ",getfact)

let arr=[1,2,3,4,5];
console.log(arr)
console.log(arr[2])

// create a calculator using javascript functions
let a=10;
let b=5;    
function add(a,b){
    return a+b;
}
console.log("addition is : ",add(a,b))
function sub(a,b){
    return a-b;
}   
console.log("subtraction is : ",sub(a,b))
function mul(a,b){
    return a*b;
}
console.log("multiplication is : ",mul(a,b))
function div(a,b){
    return a/b;
}
console.log("division is : ",div(a,b))
function mod(a,b){
    return a%b;
}
console.log("modulus is : ",mod(a,b))

//calculate compound interest
function compoundinterest(p,r,t){
    return p*(Math.pow((1+r/100),t));
}
let ci=compoundinterest(10000,10,2);
console.log("compound interest is : ",ci)   
//calculate simple interest
function simpleinterest(p,r,t){
    return (p*r*t)/100;
}
let si=simpleinterest(10000,10,2);
console.log("simple interest is : ",si)

//if conditions
let number=10;
if(number>0){
    console.log("number is positive")   
}else{  
    console.log("number is negative")
}
//calculator using if conditions
let n1=20;
let n2=10;
let operator="-";
if(operator=="+"){  
    console.log("addition is : ",n1+n2)
}else if(operator=="-"){
    console.log("subtraction is : ",n1-n2)
}else if(operator=="*"){
    console.log("multiplication is : ",n1*n2)
}else if(operator=="/"){    
    console.log("division is : ",n1/n2)
}else if(operator=="%"){
    console.log("modulus is : ",n1%n2)
}else{
    console.log("invalid operator")
}

age=20;
if(age>=18){
    console.log("eligible to vote")
}else{
    console.log("not eligible to vote")
}

//student grade
let marks=85;   
if(marks>=90){
    console.log("A grade")
}   else if(marks>=80){
    console.log("B grade")
}   else if(marks>=70){
    console.log("C grade")
}   else if(marks>=60){
    console.log("D grade")
}

//b=30 for 4km
//for the next 5km the price is 10
//for the next 10km the price is 15
//if the kms are more that will be 20
//person travelled 19.5kms what will be the price
function calculateFare(kms) {
  let fare = 0;

  if (kms <= 4) {
    fare = 30; 
  } else if (kms <= 9) {
    fare = 30 + 10; 
  } else if (kms <= 19) {
    fare = 30 + 10 + 15; 
  } else {
    fare = 30 + 10 + 15 + 20; 
  }

  return fare;
}

let distanceTravelled = 19.5;
let totalFare = calculateFare(distanceTravelled);
console.log("Total fare for", distanceTravelled, "km is:", totalFare);

// travelled
function calculateAutoPrice(distance) {
  let price = 0;

  if (distance <= 4) {
    price = 30;
  } else {
    price = 30;
    distance -= 4;

    if (distance <= 5) {
      price += distance * 10;
      return price;
    } else {
      price += 5 * 10;
      distance -= 5;
    }

    if (distance <= 10) {
      price += distance * 15;
      return price;
    } else {
      price += 10 * 15;
      distance -= 10;
    }

    price += distance * 20;
  }

  return price;
}
let travelled = 19.5;
console.log("Total Price for " + travelled + " km: ₹" + calculateAutoPrice(travelled));

//while loop
let j=0;
while(j<10){
    console.log(j)
    j++;
}
//multiples of 5 using while loops
let k=1;
while(k<=10){
    console.log(k*5)
    k++;
}


//dom manipulations


//select an element
const myDiv = document.geteElementById('myDiv');

//change content
myDiv.textcontent = "Hello, world!";
//add a class
myDiv.classList.add('highlight');
//create a new pararaph and append it
const newparagraph = document.createElement('p');
newparagraph.textcontent = 'this is a new paragraph';
myDiv.appendchild(newparagraph);
//add an event listener
myDiv.addEventListener('click', function() {
    alert('Div clicked!');
});