// EVENTS AND EVENT-HANDLING !!!
// event mtlb hota hai koi action hua
// event listener ka mtlb hai aapne koi action ka reaction diya

// select the tag first
// realize what should happen in my tag => let's say i am clicking(action)
// implement the reaction

// let h1 = document.querySelector("h1");
// h1.addEventListener("click",()=>{
//     h1.style.color ="red";
// });

// let p = document.querySelector("p");
// let dblclick = function(){
//     p.style.color="red";
// }
// p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick)

let input = document.querySelector("input");
input.addEventListener("input",(type)=>{
    if(type.data!==null){
    console.log(type.data);
    }
})