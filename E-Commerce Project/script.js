const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");
const form = document.querySelector("form");
const productsDiv = document.querySelector(".products")


const productsArr = [];

let updateIndex = null;

let ui = ()=>{
    productsDiv.innerHTML = "";
    productsArr.forEach((elem,index)=>{
        productsDiv.innerHTML+= ` <div class="product-card">

                <div class="img">
                    <img src="${elem.Image}" alt="">
                </div>

                <div class="text">
                    <h3> ${elem.productName}</h3>
                    <p>${elem.Description}</p>
                    <p>${elem.Price}</p>
                </div>

                <div class="btns">
                    <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
                    <button onclick = "deleteProduct(${index})" id="delete">Delete</button>
                </div>

            </div>`
    })
}




createBtn.addEventListener("click",()=>{
    formDiv.style.display = 'flex';
})

closeBtn.addEventListener("click", ()=>{
    formDiv.style.display = "none"
    updateIndex = null;
    form.reset();
    form.querySelector("button").textContent = "Create Product";
})

form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    // let productName = form[0]; // YE BHI LIKH SKTA HUN 
    let productName = event.target[0].value;  // event.target mein bhi mera form hi aa rha hai
    let Description = event.target[1].value;
    let Price = event.target[2].value;
    let Image = event.target[3].value;

    if(productName.trim() === "" || Description.trim() === "" || Price.trim() === "" || Image === ""){
        alert("Please fill all the fields");
        return;
    }

    let obj = {
        productName,
        Description,
        Price,
        Image,
    }

    if(updateIndex !== null){
        productsArr[updateIndex] = obj;
        updateIndex = null;
    }
    else{
    productsArr.push(obj);
    }

    ui();
    

    form.reset();

    form.querySelector("button").textContent = "Create Product";

    formDiv.style.display = "none"


    

});

const updateProduct = (name)=>{
    formDiv.style.display = 'flex';
    let product = productsArr.find((elem)=> elem.productName === name);
    // iss product ke pass mera pura obj hai.

    updateIndex = productsArr.findIndex((elem) => elem.productName === name);

    form[0].value = product.productName;
    form[1].value = product.Description;
    form[2].value = product.Price;
    form[3].value = product.Image;

    form.querySelector("button").textContent = "Update Product";


}


const deleteProduct = (index)=>{
    productsArr.splice(index,1);
    ui();
}

