// majority part of dom manuplation
// html se element select krna
// text bdlna
// html bdlna
// css bdlna
// attribute bdlna
// event listners add krna

// SELECTING ELEMENTS

// let abcd = document.getElementById("abc");
// // console.log(abcd);
// // abhi hume h1 as a tag dikh rha hai toh log ki jgah dir kro 
// console.dir(abcd);

// let hello = document.getElementsByClassName("hey");
// console.log(hello)

// let abcd = document.querySelector("h1");
// // quersySelector humesha pehla wla element select krta hai
// console.dir(abcd);

// let abcd = document.querySelectorAll("h1");
// // sarein h1 select ho jayenge .. aur aapko array jaisa structure milega 
// console.dir(abcd);

// TEXT/CONTENT ACCESS

// let h1 = document.querySelector('h1');
// h1.innerHTML = "<i> hey Akshat </>";
// agr kisi bhi element ke ander agr html dalna hai toh innerhtml use kro

// innertext and innerContent mtlb text bdlna 
// h1.innerText = "hey Akshat";

// h1.innerContent = "hey Akshat";


// ATTRIBUTE MANIPULATION{TAG KE SATH JO LIKHA HOTA HAI FOR EG CLASS , ID SRC ETC WO ATTRIBUTE HAI}

// let a = document.querySelector('a');
// a.href = "https://www.google.com";

// 1. setAttribute

// a.setAttribute("href","https://www.google.com");

// let img = document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1780678839543-1abf5a0b8d71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

// 2. getAttribute()

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// 3. removeAttribute

// let a = document.querySelector("a");
// a.removeAttribute("href");


// DYNAMIC DOM MANUPLATION

// 1. CREATE ELEMENT

// let h1 = document.createElement("h1");
// h1.textContent = "Hello ji";
// document.querySelector("body").prepend(h1);
// document.body.append(h1);

// prepend mtlb body ke ander pehla element ye hoga
// append mtlb body ke ander aakhri element ye hoga

// let h1 = document.createElement("h1");
// h1.textContent = "hi guys mai bhaar se aaya hun";
// // document.querySelector("div").appendChild(h1);
// document.querySelector("div").prepend(h1);


//STYLE UPDATE 

// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "black";
// h1.style.fontFamily = "Gilroy";

// let h1 = document.querySelector("h1");
// h1.classList.add("hulu");
// h1.classList.remove("hulu")
// h1.classList.toggle("hulu")
// toggle basically ye krta hia ki agr elem mein classlist lgi hui thi toh hta do aur hti hui thi toh lga do


// let button = document.querySelector(".buynow");

// let heading = document.querySelector("#heading")
// heading.textContent = "Welcome Sheryians"


// let list = document.querySelectorAll("li");
// list.forEach(function(val){
//     console.log(val.textContent);
// })


// let para = document.querySelector("p");
// para.innerHTML ="<b>Updated</> by JavaScript"

// let img = document.querySelector("img");
// console.log(img.getAttribute("src"));


// let link = document.querySelector("a");
// link.href = "www.sheryians.com";

// let div = document.querySelector("div");
// div.setAttribute("title","title");


// let button = document.querySelector("button");
// button.removeAttribute("disabled");

















