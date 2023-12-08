console.log("Hello world");
let first_Nme = " usama";
let mid_name = " rana";
console.log(" your complete name is = ",first_Nme,mid_name);
// print window
console.log(window);
// if write 
window.console.log("hello2");
window .console.log("hello3");
// alert window object ka part hota he
window.alert(" you are crazy");

//windows object represents an open window in browser
//automatically created by browser not javascript
//it is a global object with lots of properties&method


//Now DOM START:
//DOM stands for document object model of page
// jo html ka code likhty attach kr ky javascript
 // jo sary ky sary for example paragraph tags all can access in javascript


 //MAIN POINT
 //html ky all element hoty hn or tag hoty hn woo javascript me aa kr
  // object bun jaty hn jis ko name dy dety hn document
  // document object window object me hoti he
  // humy pta he doument window ka part he

  window.document

  //console.log sirf print krwata
  //console.dir joo he woo document object ki joo properties hn
  // methods hn onhy print krta

//console.log(window.document)html tag ko print krwany ky liyeee
// use kiyaa jata he

//console.dir woo object ko print krwataa he
// sub sy phly print krwaty hn humari window object ko
console.dir(window);
// hum chahy too likh sakty hn window.document
//console.dir(window.document);
// window object global he chahy too akela document bhi likh skty hn iska sub ko pta he window ka
console.dir(document);
//agr mujhy documet ky andr body ko access krna he too
console.dir(document.body);
// html tags print ya access kr rhy through javascript krwany ky liyee he
console.log(document.body);
//kisi bhi node ko access kr skty hn
console.dir(document.body.childNodes[1]);
// text style change krna he dynamic manipulation changes
document.body.childNodes[3].innerText = "Rana usama";
// if i can access a node
document.body.childNodes[2].innerText = "gana";
document.body.childNodes[1].innerText = "rana";


//DOM Manipulation start
// 1. selecting with id:

 let heading = document.getElementById("heading");//h1 acces
 // tag console.log(heading);
 console.dir(heading);

 // id ko style deny ky liye # use krty hn #heading
 // 2. selcting with class
 //document.getElementByClassName("myclass");
 let paragraph = document.getElementsByClassName("paragraph")
console.dir(paragraph);//class represent with .paragraph
//3.selecting with  tags
//document.getElementByTagName("p")
  let p = document.getElementsByTagName("p");
console.dir(p);

//4. Better method for access element from page
// is queryselectors
//1.document.querySelector("myid/myclass/tag")
// this return first element
//2. document.querySelectorAll("myid/myclass/tag");

//agr mujhy sary paragraph chahiyee
  let First_elements = document.querySelector("p");
  console.dir(First_elements);

  //agr all element access krny hn using queryselectors
  let all_element = document.querySelectorAll("P");
 console.dir(all_element);//nodelist access

// properties

//.tagname
all_element;
all_element.tagName;
//2. property to print innertext of html
//.innerText
// ye return krta he text all content elemt ka or its children
// children mean for example
/* <body>
 <div>

 </div>

   <img>
   <h1></h1>
   <p></p>
   <script></script>
</body>

*/
// body is head node parent or nichy sary child nodes
// parent child or sibling left or right same level pr hn


// DOMS types
//1.text nodes
//2.comment 3. elements
//Element nodes are important in DOM

//LET's practice
/*let h2 = document.querySelector("h2");
console.dir(h2.innerText);
 // change propeerty 
 h2.innerText = "abc"; // ye too rakhna hi he pr or text add krna he
 h2.innerText = h2.innerText +"From Apna college";
*/
 // 2.Example
// multiple ko select krny ky QuerySelectorAll
 let divs = document.querySelectorAll(".box");
 console.log(divs[0]);
 console.log(divs[1]);// access with divs[1],divs[3]
divs[0].innerText = "new unique value";//change
divs[1].innerText = "you are soo excited";
divs[2].innerText = "i am soo exited";
console.log(divs[2].innerText);
divs[3].innerText = "Hello "
console.log(divs[3].innerText);

//access values with for of loop
let idx = 1;
for(div of divs){
    console.log(div.innerText);
    //change values in loop
    div.innerText = `new unique values ${idx}`;
    idx++;
}
// with use of index





























































































































