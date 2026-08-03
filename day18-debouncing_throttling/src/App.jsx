import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [productsData, setProductsData] = useState([])
  const [searchData, setSearchData] = useState(null)
  const [scrollY, setScrollY] = useState(null)

  let throttle = false

  let fetchProducts = async ()=>{
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
          setProductsData(response.data);
      } catch (error) {
        console.log("products api error",error)
      }
  }

  let filterdData = ()=>{
    console.log("Filter running..")
    let result = productsData.filter((val)=>{
      return val.title.toLowerCase().includes(searchData.toLowerCase())
    });
    setProductsData(result);
  }

// filterdData();
// ab merko chaiye ki jb jb mai input mein kuch likhu merafilterdData wla function call ho 

// DEBOUNCING
useEffect(()=>{
  if(!searchData) return ;

 let timeout = setTimeout(()=>{
    filterdData()
  },700)

  return ()=> clearTimeout(timeout);
  // ye return tb chlta hai jb purana wla jaa rha hota hai 

},[searchData])
// debouncing is used in searching product 



// THROTTLING
useEffect(()=>{
    let handleScroll = ()=>{

       if(throttle) return;

      throttle = true;
    console.log("scroll triggered..");
    setScrollY(window.scrollY);

    setTimeout(() => {
      throttle=false;
    }, 5000);
  }

  window.addEventListener('scroll',handleScroll);

  // memory leak hone se bachata hai{maan lo event lagaya home pe aur jb hum about pe gye toh wha bhi ye event chl rha}
  return ()=> window.removeEventListener("scroll",handleScroll);

},[])


  useEffect(() => {
   fetchProducts()
  }, [])

  return (
    <div>
      <h1>Debouncing</h1>

      <input type="text"
      className='p-3  m-10'
      placeholder='Search Product..'
      onChange={(e)=>setSearchData(e.target.value)} />

{
  productsData.map((val)=>{
    return <h1 key={val.id} >{val.title}</h1>
  })
}

    </div>
  )
}

export default App
