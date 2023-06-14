let bodycontent = document.querySelector('body').innerHTML+=`

<div id="carouselExampleCaptions" class="carousel slide">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://i.postimg.cc/m2YytJ41/1419898-top-nike-shoes-wallpaper-3840x2160.jpg" class="d-block w-100" alt="picture">
    <div class="carousel-caption d-none d-md-block">
      <h5>Versatile</h5>
      <p>Adapt and overcome in any situation</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://i.postimg.cc/TY1TwMgC/443fec6c8ae62a52463f1e62f5f6eadc.jpg" class="d-block w-100" alt="picture">
    <div class="carousel-caption d-none d-md-block">
      <h5>Resiliant</h5>
      <p>Get back up after the fall</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://i.postimg.cc/3wGtFB0P/376140-4k-wallpaper-min.jpg" class="d-block w-100" alt="picture">
    <div class="carousel-caption d-none d-md-block">
      <h5>Fearless</h5>
      <p>Face your enemies in style</p>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>

<footer>
      
<div class="footer-c">Gmail: CompanySneaker123@gmail.com <br> Phone: 089 782 6532 <br> &copy;Copyright 2023</div>

</footer>

`



//  let content = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : 
// localStorage.setItem('products', JSON.stringify (
//   [

//   {

//     id:1,
//     name:'Jordan 1 <br> University blue',
//     price:'R3400',
//     image:'https://i.postimg.cc/t4t27zwk/Screenshot-2023-06-12-133626.png'

//   },

//   {

//     id:2,
//     name:'Puma Regal Horizon',
//     price:'R2100',
//     image:'https://i.postimg.cc/wvPdPFjg/Screenshot-2023-06-12-133547.png'

//   },

//   {

//     id:3,
//     name:'Nike Air Max Plus',
//     price:'R2400',
//     image:'https://i.postimg.cc/t4vvDwMv/Screenshot-2023-06-12-133702.png'

//   },

//   {

//     id:4,
//     name:'Jordan 13',
//     price:'R3500',
//     image:'https://i.postimg.cc/ZnxYgZhz/Screenshot-2023-06-13-083034.png'

//   }

// ])) 


// let container = document.querySelector('.container');
// content.forEach((data) =>{

//   container.innerHTML +=`
  


//     <div class="row gap-3" id="products">
//     <div class="card" style="width: 18rem;">
//     <img src="${data.image}" class="card-img-top" alt="picture of product" class="image">
//     <div class="card-body">
//       <h5 class="card-title">${data.name} <br> </h5>
//       <p class="card-text" class="price">${data.price}</p>
//       <a href="#" class="btn btn-secondary" class="add-btn">Add to cart</a>
//     </div>
//   </div>

// `
// }
// )

// let addtoCart = document.getElementsByClassName('add-btn')

// console.log(addtoCart)


 /*
 function updateTotal(){

    let cartItems = document.getElementByClassName('cart-item')[]
     let cart-rows =cartItems.getElementByClassName('cart-row')

     for (let i = 0; i< cart-rows.length; i++){

        let cart-row = cart-rows[i]
        let price = cart-row.getElementByClassNmae('cart-price)[0]
        

     }
 }
 
 */

//  function updateCartTotal (){

//   let cartItemContainer = document.getElementByClassName('cart-items')[0]
//   let cartRows = cartItemContainer.getElementByClassName('cart-row')
//   let total = 0
//   for (let i =0; i < cartRows.length ; i++){

//     let cartRow = cartRows[1]
//     let price = cartRow.getElementByClassName('cart-price')[0]
//     let quantityEl = cartRow.getElementByClassName('cart-quantity-input')[0]
//     let cartPrice = parseFloat(price.innerText.replace('R', ''))
//     let quantity = quantityEl.value
//     total=total + (price * quantity)
//     console.log(price)
//   }

//   document.getElementsByClassName('cart-total-price')[0].innerText = 'R'+ total

//  }

// let addtoCartButton = document.getElementsByClassName('shop-item-button') 
// for (let i =0; i < addtoCartButton.length ; i++){

//    let button = addtoCartButton[i]
//    button.addEventListener('click', ClickedAdd)

// }

// function ClickedAdd(event){

//   let button = event.target
//   let items = button.data.image
//   let title = shopItem.getElementsByClassName('image')[0].innerText
//   console.log(title)
// }

// Assisted by Ryan Barron

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('R', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = 'R' + total
}