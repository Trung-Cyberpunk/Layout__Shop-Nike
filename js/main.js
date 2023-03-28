let cartIcon = document.querySelector("#cart-icon")
let Cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

cartIcon.onclick = () =>{
    Cart.classList.add("active");
};
closeCart.onclick = () =>{
    Cart.classList.remove("active");
};

