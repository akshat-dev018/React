// console.log(React);  

// document => mtlb real DOM


// CREATING ELEMENT BY REACT

// let rh1 = React.createElement("h1",{class : "box"},"i am created through react");
// tum aese kbhi nhi kroge ye behind the scene react kaise kaam krta hai uspe hai
// pehli cheez => element ka naam 
// {} => props - basically attributes jo tum element pe lagana chathe ho  "AUR HUMARA CHILDREN BHI PROPS HAI "
// "PROPS WO CHEZ HAI JO EK TAG KE ANDER KI SAARI CHEZ HAI"
// children => agr text chaiye  "PRIORITY ISKI HAI FIR ATTRIBUTE KI" 
// console.log(rh1)

// let rh1 = React.createElement("h1",{className: "box"},React.createElement("span",{},"I am under h1"));
// console.log(rh1)
// <h1 class: "box"> <span>I am under h1</span></h1>

// HOW TO INTEGRATE REACT ELEMENT IN REAL DOM

let rh1 = React.createElement("h1",{className: "box"},React.createElement("span",{},"I am under h1"));

let realDomElem = document.querySelector("#root");

let rootOfReact = ReactDOM.createRoot(realDomElem);

rootOfReact.render(rh1)

// PROCESS
// MAINE REACT KA ELEMENT CREATE KRA .. JO MERKO REAL DOM MEIN SHOW KRNA HAI .. LEKIN REAL DOM MERA VIRTUAL DOM NHI SMJHTA
// ISLIYE INKE BEECH MEIN AAYA REACT DOM . 
// HUMNE REAL DOM KE ELEMENT KO SELECT KRA JIS MEIN HUM REACT KE ELEMENTS SHOW KRENGE
// HUMNE FIR REACT DOM KA ROOT BNA DIYA REAL DOM KE SELECTED ELEMENT KO
// AUR FIR USS ROOT MEIN RENDER KRA HUMNE APNE REACT KE ELEMENTS KO
// AUR MERA RENDER ACCEPT KRTA HAI SIRF EK SINGLE PARAMETER


// ES MODULE
// multiple js ki file create krenge aur usmein alg - alg function code rkhenge jo ek main js ki file 
// se link hogi


import{a,sum} from "./main.js";

let result = sum(50,90);

console.log(a);

console.log(result)

// Practise
// let div = React.createElement(
//     "div" , {} , React.createElement(
//         "h1",{},React.createElement(
//             "span",{},"I am span")));

// let realDomElement = document.querySelector("#react");
// let root = ReactDOM.createRoot(realDomElement);

// root.render(div);


// ARRAY BNA KE BHI KR SKTE HO AGR MULTIPLE ELEMENT CREATE KRNA HO
let div = React.createElement(
    "div" , {} ,[
        React.createElement("h1",{}, React.createElement("span",{},"I am span")),
        React.createElement("h2",{}, React.createElement("span",{},"I am span in h2")),
    ]);

let realDomElement = document.querySelector("#react");
let root = ReactDOM.createRoot(realDomElement);

root.render(div);