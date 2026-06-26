import React from "react";


const h1 = React.createElement("h1",{} , "hello this is from react");

const root = document.querySelector("#root");
 ReactDOM.createRoot(root).render(h1)

console.log(h1)
console.log(React);






