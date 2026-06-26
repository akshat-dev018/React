import React from "react";
import About from "./assets/About";

let App = ()=>{
  // let ui = React.createElement("div",{},
  //  [ React.createElement("h1",{},"Hello"),
  //   React.createElement("h2",{},"Bye"),
  //   React.createElement("h3",{},"vapas aao"),
  // ])
  // return ui
  // AESE BNAOGE TOH JINDAGI MEIN NHI BNEGA KYUKI EK WEB SITE MEIN BHT SAREIN DIV ANIMATION ETX HOTE HAI
  // YAHA KAAM AATA HAI "BABBLE" Isko "TRANSPILE" KR RHA HAI JO HTML CODE KO DIRECT ISMEIN CHANGE KRDEGA

  return  (<div>
      <h1>Hello</h1>
      <h2>Bye</h2>
      <h3>vapas aao</h3>
      {/* {About("raghav")} */}  
      {/* normal function */}

      {/* <About width="300" name="raghav" /> */}

      {/* <About element={<h1>hello</h1>} /> */}
    {/* tum kbhi bhi ekement aese nhi bhejoge */}

      <About width="300" element={<h1>hello</h1>}>
        <h1>Hello i am children</h1>
      </About>


    </div>
  );
  
};

export default App;
