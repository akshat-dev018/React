// SELECTION OF AN ELEMENT

const { Children } = require("react");

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
// Children => HTML COLLECTIO











