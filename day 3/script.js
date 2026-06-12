// attributes and properties
// - sertAttribute , - getAttribute , - removeAttribute , - hasAttribute
// with data -* name
// input.value(property,current state) vs input.getAttribute("value")(attribute , initial state)

// let h3 = document.querySelector("#id1");

// // let response = h3.getAttribute("id");
// // let response = h3.getAttribute("class");
// // console.log(response)


// h3.setAttribute("width","200")
// // it demands 2 thing name of the attribute and value for that attribute
// console.log(h3.getAttribute("width"))

// h3.removeAttribute("class");

// console.log(h3.hasAttribute("width"));
// // true false mein ans dega

// // GENERALLY ASKED IN FAANG =>MAKING CUSTOM ATTRIBUTE
// const userCard = document.querySelector("#user_card");
// console.log(userCard.getAttribute("data-user-id"))

// // HOW TO ACCESS AND CHANGE
// userCard.dataset.userId = "678"
// // dataset IS NOT WRITTEN IN CAMEL CASE HERE CUZ IT IS A SINGLE KEYWORD
// console.log(userCard.getAttribute("data-user-id"))

// INPUT.VALUE VS GETATTRIBUTE
// let input = document.querySelector("input");
// let button = document.querySelector("button");

// button.addEventListener("click",()=>{
//     console.log(input.value); // => ye live value dega 
//     console.log(input.getAttribute('value')); //=> ye static value hi dega
// })









// CREATING INSERTING AND REMOVING ELEMENTS FROM DOM

// 1. createElement
// let footer = document.createElement('footer')
// let span = document.createElement('span')
// span.innerHTML = " i am <i> italic</i>"

// // 2. insert that element at last => APPENDCHILD
// // document.body.appendChild(footer) // old way , we can only select one at a time
// let main = document.querySelector('main')
// // main.appendChild(span)

// // now we need to again do the same for span so old and time consuming
// main.append(footer,span)

// 3. removing a child
// main.removeChild(span)
// *************************************************************************************************

// 4. INSERT BEFORE => OLD WAY
// let main = document.querySelector('main');
// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");

// box2.style.backgroundColor = "yellow";
// box3.style.backgroundColor ='blue';

// putting yellow box before red box
// main.insertBefore(box2,box1)



// 2.MODERN WAY 

let main = document.querySelector('main');

const box1 = document.createElement('div')
const box2 = document.createElement('div')
const box3 = document.createElement('div')

box1.classList.add("box");
box2.classList.add("box");
box2.style.backgroundColor = 'yellow'
box3.classList.add("box");
box3.style.backgroundColor = 'blue'

main.append(box1,box2);
// main.prepend(box3) // sbse pehle insert kro ya place kro

// main.before(box2) // pure main div ke pehle aa gya
// box1.before(box2);  // box1 se pehle lg gya

// box2.after(box1);  // box2 ke baad box1 aayega

// box1.replaceWith(box3)  // box1 ko replace krdo box3 se
// main.replaceChild(box1,box3)











