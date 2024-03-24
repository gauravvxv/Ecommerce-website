const productPerPage = 6;
let currentPage = 1;
let totalPages;
let currentCategory='';


const handleFetching = async () => {
try {
    let data = await fetch(`http://localhost:3000/data`);
let res = await data.json();
console.log(res);

if (currentCategory) {
    res = res.filter(product => product.name === currentCategory);
}

totalPages = Math.ceil(res.length / productPerPage);
display(getProductForPage(res,currentPage));


} catch (error) {
    console.log(error)
}
}

function display(data){
    let parent = document.querySelector(".prod");
    parent.innerHTML="";
data.map((e)=>{

    if(currentCategory ==='' || e.name===currentCategory ){

        
        
        let child = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h4")
        let price = document.createElement("p");
        let cart = document.createElement("button");
        
        image.src = e.image;
        name.textContent = e.discount;
        price.textContent = "Price : "+  e.price;
        cart.textContent = "Add to cart"
        
        child.className = "items"
        child.append(image,name,price,cart);
        parent.append(child);
    }
    })

}


function getProductForPage(data,page){
    const index = (page-1) * productPerPage;
    const endind = index + productPerPage;
    return data.slice(index,endind);
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        handleFetching();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        handleFetching();
    }
}

document.getElementById("next").addEventListener("click",nextPage);
document.getElementById("prev").addEventListener("click",prevPage);

function filterCategory(category){
    currentCategory = category;
    currentPage=1;
    handleFetching();
}
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        const gender = this.getAttribute('data-gender');
        filterCategory(gender);
    });
});
handleFetching();