let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=() =>{
    searchForm.classList.toggle('active');
}
let cartItem=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=() =>{
    cartItem.classList.toggle('active');
}
let loginItem=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=() =>{
    loginItem.classList.toggle('active');
}
