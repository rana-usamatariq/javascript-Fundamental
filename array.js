// Arrays:
//collection of items
/*let mark1 = 677
let marks2 = 90
let marks3 = 80
// object 
/*let marks ={
    srut1: 97,
    stu2:78,
};
console.log(srut1,stu2);*/
// Difference in making variables and array is:
// you need to make a one name
//position is also called index
//let marks=[98,90,80]
/*let marks = [97,82,90,70];
console.log(marks);
console.log(marks.length);//property

// example
let heroes = ["ironman","hulk","spiderman"];
console.log(heroes);*/
// Array in js
//Array indices:
//arr[0],arr[1],arr[2]
  //97,     82  , 64
  // if you cahnge value of array
  //arr[2] = 50
  // string not change
  // strings are immutable and array are mutable


2.//LOOPING OVER AN ARRAY
//print all elements

 let Heroes = ["usama", "Ali","huzaifa","azeem"];
let n = 4;
for(let i = 0; i<=n; i++){
    console.log("The complete list of Heroes",Heroes[i]);
}

// for of loop  in array
for(let element of Heroes){
    console.log(element);
}

// another example
let cities = ["delhi","pune","mumbai"];

// for of loop using to print an array
for(let info of cities){
    console.log(info);
}

// third example
let provinces=["pakistan"," karachi", " mauambi"];
for(let province  of provinces){
    console.log(province);
}

// create an array in js
let name = ["Rana","usama","tariq"];
for(let a of name){
 console.log(a.toUpperCase());
 // if you want to uppercase
 //toUpperCase() for uppercase
}

//PRACTICE QUESTIONS FOR ARRAY
/*let Marks =[85,97,44,37,76,60];
let sum = 0;
for(let val of Marks){
    sum += val;
}
console.log(`${sum}`);// embed sum 
let avg = sum/Marks.length;
console.log(`${avg}`);
*/
// second questions
//300* 10 / 100
//Answer 30// 300-30 // 270
let items = [20,30,2300,100];
for(let i = 0; i<= items.length; i++){
     //  apply 10% off on every item:
     let offer = items[i]/10;
      items[i] = items[i] - offer;
    
}
console.log(items);

// information 
let Aero = ["usama","huzaifa","uaf"];
let length = 4;
for(let char of Aero){
    console.log(char);
}

 









































































