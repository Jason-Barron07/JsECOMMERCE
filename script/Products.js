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



 let content = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : 
localStorage.setItem('products', JSON.stringify (
  [

  {

    id:1,
    name:'Jordan 1 <br> University blue',
    price:'R3400',
    image:'https://i.postimg.cc/t4t27zwk/Screenshot-2023-06-12-133626.png'

  },

  {

    id:2,
    name:'Puma Regal Horizon',
    price:'R2100',
    image:'https://i.postimg.cc/wvPdPFjg/Screenshot-2023-06-12-133547.png'

  },

  {

    id:3,
    name:'Nike Air Max Plus',
    price:'R2400',
    image:'https://i.postimg.cc/t4vvDwMv/Screenshot-2023-06-12-133702.png'

  },

  {

    id:4,
    name:'Jordan 13',
    price:'R3500',
    image:'https://i.postimg.cc/ZnxYgZhz/Screenshot-2023-06-13-083034.png'

  }

])) 


let container = document.querySelector('.container');
content.forEach((data) =>{

  container.innerHTML +=`
  


    <div class="row gap-3" id="products">
    <div class="card" style="width: 18rem;">
    <img src="${data.image}" class="card-img-top" alt="picture of product" id="image">
    <div class="card-body">
      <h5 class="card-title">${data.name} <br> ${data.price}</h5>
      <p class="card-text"></p>
      <a href="#" class="btn green">Add to cart</a>
    </div>
  </div>

`
}
)



