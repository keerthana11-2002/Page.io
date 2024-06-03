function fetchProducts(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("could not find")
            }
            return response.json()
        })
        .then(data => {
            const productsList = document.getElementById("products-list")
            productsList.innerHTML = "";
            const products = data.products;
            products.forEach(product => {
                const productItem = document.createElement("div")
                productItem.textContent = product.title;
                productsList.appendChild(productItem)
                
            });
        })
        .catch(err => console.log(err))
} 


function setActivePage(pageNumber){
    const pageItems = document.querySelectorAll(".page-item")
    pageItems.forEach(item=>{
    item.classList.remove("active")
    })
    document.querySelector(`.page-item.${pageNumber}`).classList.add("active")
}



document.addEventListener("DOMContentLoaded",() =>{


const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")

one.addEventListener("click", () =>{
fetchProducts("https://dummyjson.com/products?limit=10&skip=0")
setActivePage("one")
}); 
two.addEventListener("click", () => {
fetchProducts("https://dummyjson.com/products?limit=10&skip=10")
setActivePage("two")
});
three.addEventListener("click", () =>{
fetchProducts("https://dummyjson.com/products?limit=10&skip=20")
setActivePage("three")
});
four.addEventListener("click", () => {
fetchProducts("https://dummyjson.com/products?limit=10&skip=30")
setActivePage("four")
})
five.addEventListener("click", () => {
fetchProducts("https://dummyjson.com/products?limit=10&skip=40")
setActivePage("five")
})
fetchProducts("https://dummyjson.com/products?limit=10&skip=0")
})