// SELECTION OF AN ELEMENT

const element = document.querySelector("element"); 

// only select first tag
const h1 = document.querySelector('h1');

// FOR SELECTING ALL TAGS => NODE LIST COLLECTION {RELOAD PE CHLEGA}
const h1 = document.querySelectorAll('h1');

//SELECTING BY TAG NAME => HTML COLLECTION {LIVE CHL RHA HOGA}
const h1 = document.getElementsByTagName('h1');

// SELECTING BY ID
const h1 = document.getElementById("id");

// SELECTING BY CLASS NAME
const h1 = document.getElementsByClassName("class-name");

// UNIVARSAL SELECTOR 

// tag se select hogya
const h1 = document.querySelector("tag");

// id se select krna
const h1 = document.querySelector('#id');

// class se select krna
const h1 = document.querySelector(".class-name")

// changing of html

// text change
// textContent
// innertext => pura str ud jayega agr parent ko change karoge
// innerHtml => pura str ud jayega

// NODELIST 
// ye sabhi cheezo ko node mein count krta hai jaise => {blank space , white space , line break}=> this is known as text node

// HTML COOLECTION 
// ye sirf elements of html ko point krta hai

// childNodes => Nodelist
// Children => HTML COLLECTION

// styling
h1.style.background = "red";
h1.style.fontFamily = "marque"

// classes
// 1. classlist.add() => add class to particular element
// 2. classlist.remove() => class remove krna
// 3. classlist.contain() => true ya false return krega
// 4. classlist.toggle() => agar class hai toh remove krega , agr class nhi hai toh lga dega 
// 5. classlist.replace() => do values leta hai .. class and new class => purani class ko new class se replace kr dega


// select which one to change
const h1 = document.querySelector("#head1")

// is my h1 containing a class ?
const isClass = h1.classList.contains('heading');
// mtlb kya mera h1 heading naam ki class contain krta hai => ans true ya false mein ayega

// i have to change or replace my class
h1.classList.replace("heading","newclass");

// toogle class
h1.classList.toggle("heading")

// adding a class when it does not contain any class
const div = document.querySelector("#div");
div.classList.add("box");

