

let container = document.querySelector('.container')

let content = [

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

]

content.forEach((data) =>{

  container.innerHTML +=`
  


    <div class="row gap-3" id="products">
    <div class="card" style="width: 18rem;">
    <img src="${data.image}" class="card-img-top" alt="picture of product">
    <div class="card-body">
      <h5 class="card-title">${data.name} <br> ${data.price}</h5>
      <p class="card-text"></p>
      <a href="#" class="btn">Add to cart</a>
    </div>
  </div>

  
`


})
