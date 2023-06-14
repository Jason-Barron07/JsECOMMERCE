let container = document.querySelector('.container');
let content = (

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
            image:'https://i.postimg.cc/t4vvDwMv/Screenshot-2023-06-12-133702.png',
    
    
        },
    
        {
    
            id:4,
            name:'Jordan 13',
            price:'R3500',
            image:'https://i.postimg.cc/ZnxYgZhz/Screenshot-2023-06-13-083034.png',
    
    
        },

        {
    
            id:5,
            name:'Jordan 1 low',
            price:'R2299',
            image:'https://i.postimg.cc/8CffMdB7/Screenshot-2023-06-14-134818.png',
    
    
        },

        {
    
            id:5,
            name:'RS-TRCK RE:Escape Sneakers',
            price:'R2230',
            image:'https://i.postimg.cc/rp5W7Cdv/Screenshot-2023-06-14-135208.png',
    
    
        },
    
    
    ]
)

content.forEach((data) =>{


container.innerHTML += `

<tr>
    <th>${data.name}</th>
    <th>${data.price}</th>
    <th><img src="${data.image}" style="height:100px"/></th>
    <th><button class="del-btn">Delete</button></th>
</tr>

    
`
});






let remove = document.getElementsByClassName('del-btn')

console.log(remove)

for (let i = 0; i< remove.length; i++){

    let button = remove[i]

    button.addEventListener('click', function(event){

      let buttonAccesed=event.target
      buttonAccesed.parentElement.parentElement.remove()
        updateTotal()

    })

}

