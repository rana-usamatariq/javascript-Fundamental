// let start function in your code write a complete code
function myfunction(){
    console.log(" you are not legal autority");
    console.log(" you are working in this field");

}

// function call
myfunction();


// let's second example of function in js
function together(a, b){
     a = " usama";
    b = " Rana";
    console.log(a +b);
}
// call function
together();

// Third example of function
function mul(age, marks){
    age = 45;
    marks = 89000;
  console.log(  "  the  age and marks after multiply  = ",age*marks);
}

// call function

mul();


// foruth example of function is divide
function divide(value1, value2){

       Divide_oy= value1 / value2;
       console.log(" After completeion its" ,Divide_oy);

}
// call function
divide(40,70);
// again use this one
divide(40,70);


// Fourth example of function;

 function logoo(tablue1, tablue2){
    tablue1 = " Rana";
    tablue2 = " usama";
    console.log(tablue1,tablue2);
} 
// call function
logoo();

function myfunction(msg){
    //parameter -> input
    console.log(msg);

}
// call function
myfunction("tariq");



// complete example of  identification  age
 function calculate_Age(age){
    if(age >= 17){
        console.log(" You are not able for voting")
    }
    else if (age <= 50){
        console.log(" You are in Old Age");
    }
    else if( age >= 10 && age == 15 ){
        console.log(" You are in Teen age")
    }
    else if(age == 5 || age == 10){
        console.log("you are in child age");
    }
     else{
        console.log("You are not born")
     }
   
    }

 // call function
 calculate_Age(10);

 //objects  in js

 const student={
    age : 89,
    name  : " usama",
    address : 50/2,
    loaction: "okara",
    provinces:"punjab",
    country : " pakistan",
 }
 console.log(" The complete info of candidate",student);


 // then If else practice
 // apply 50% off at every product
 let products = [" Amazon","alibaba","ebay"];
 for(let i = 0; i <=products.length; i++){
    console.log(products[i]);
 }

 // array print
 /*let products_age = [60990,9000,700,50];
 let x;
 for(let x = 0; x <=products_age.length;x++){
    let offer = products_age[x] / 50;
    products_age[x] -= 50;
    // that's line mean is 
    //products_age[x] = products_age - 50;

 

 //  Now apply  product_age apply discount 50% off
 }
 console.log(products_age[x]);
*/

 // Arrow  FUNCTIONS IN JS
  // syntax of Arrow Function
  // const functionname = (param1, param2) =>{
    // do some work
  //}
// Moder js
  const arrowSum = (a, b) =>{
    console.log(a + b);
    console.log(a * b);
    console.log(a /  b);
  };
  // fucntion call
  arrowSum(2,4);

// multiplication arrow function
const arrowMul = (x,y) =>{
   // console.log(x * y);
    return  x* y;
};
//call function
arrowMul(5,90);


// print hello
 const printHello = () =>{
    console.log("Hello");
 };

 /*create a function using function keyword and print a string as an argument
  & return the number of vowels in the string*/
  function countVowel (str){
    // print vowels
    let count = 0;
     for ( const char of str){
    
        // print vowel from  characters
        if (char ==="a" || char ==="e" || char === "i"|| char ==="o" ||char=="u"){
            count = count + 1;
        }
        
    }
     console.log(count);
  }
  //call function
  countVowel("Rana");
  countVowel("aeiou");
  countVowel("hamza");
// Let Arrow function using this same task
const vowel = (str) =>{
    // first print vowels
    let count = 0;
    for(const char of str){
        if (char ==="a" ||char ==="e" || char ==="i"||char ==="o"||char ==="u"){
         count =count + 1;     
        }

    }
    console.log(count);
    
};
//call function
countArrow("aeiou");
countArrow("youare");

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
const countArrow = (str) =>{
    // first print vowels
    let count = 0;
    for(const char of str){
        if (char ==="a" ||char ==="e" || char ==="i"||char ==="o"||char ==="u"){
         count =count + 1;     
        }

    }
    console.log(count);
    
};
//call function
countArrow("aeiou");

// For each loop  in Array

let arr = [1,2,5,6,7];
// using for each in array
arr.forEach(function printval(val){
    //console.log(val);
    
});
// Arrow function  me for each loop
let arr1 = [4,3,2,2,1];

arr.forEach((value) =>{
    console.log(value);
});

// you can use three parameters in for each call back
let arrays = ["usama","huzifa","Rana","g"];

arr.forEach((idx,arrays) =>{
     console.log(idx,arrays);
});

// write  a programme and print square of number using foreach method
 let nums= [1,2,3,4,5];
 let n = 0;
 nums.forEach((nums)=>{
    console.log(nums*nums); // the square of for each
 });
 
 //some more Array methods
 //MAP
 // print array using map
 let number = [80,90,60,60];
 
 number.map((val) =>{
     console.log(val);
     console.log(val*val);
 });
 
 
 let number2 = [90,80,60,40];

let  newArray = number2.map(( val) =>{
    return val*val;
    
});
console.log(newArray);

//Filter method in array
let values = [1,3,4,6,7];
// find even number in array using filter method
 let even = values.filter((values) =>{
  return values%2==0;
});
 console.log(even);
 
 // Next topic
 
 //Reduce method
// reduce all values and print single value

let sum = [1,4];

 const calculate = sum.reduce(( previous,current) =>{
    return previous+current;
});// previous value and next cure

console.log(calculate);



// find largest number using reduce
let arr = []















 
 
 
 
 
 
 
 
 
 
 
 





// INTERVIEW question what is higher oder function and function method
// this answer is forEach meth
























let number2 = [90,80,60,40];

let  newArray = number2.map(( val) =>{
    return val*val;
    
});
console.log(newArray);

//Filter method in array
let values = [1,3,4,6,7];
// find even number in array using filter method
 let even = values.filter((values) =>{
  return values%2==0;
});
 console.log(even);
 
 // Next topic
 
 //Reduce method
// reduce all values and print single value

let sum = [1,4];

 const calculate = sum.reduce(( previous,current) =>{
    return previous+current;
});// previous value and next cure

console.log(calculate);
























  





























































 





















































