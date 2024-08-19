import { categories } from "./category.mjs";
import { brands } from "./brand.mjs";


const categoryBtn = document.getElementById('category-btn')
const brandBtn = document.getElementById('brand-btn')
let catContainer = document.querySelector('.category-container')

const cHEad = document.getElementById('c-heading')
const bHEad = document.getElementById('b-heading')


function clearContainer() {
    catContainer.innerHTML = '';
  
   
}

categoryBtn.addEventListener('click', ()=>{
    bHEad.style.display='none'
    clearContainer();
    cHEad.style.display='block';
    categories.forEach((item) => {
let box = document.createElement('div')
box.classList.add('box-style')

let imagePart = document.createElement('img');
imagePart.setAttribute('src',item.image);
imagePart.classList.add('image-style')
let desc = document.createElement('p')
desc.textContent= item.name;
desc.classList.add('desc-style')
box.appendChild(imagePart)
box.appendChild(desc)
catContainer.appendChild(box)

    })
})

brandBtn.addEventListener('click', ()=>{
    cHEad.style.display='none';
    clearContainer();
    bHEad.style.display='block'
    brands.forEach((item) => {
let box = document.createElement('div')
box.classList.add('box-style')

let imagePart = document.createElement('img');
imagePart.setAttribute('src',item.image);
imagePart.classList.add('image-style')
let desc = document.createElement('p')
desc.textContent= item.name;
desc.classList.add('desc-style')
box.appendChild(imagePart)
box.appendChild(desc)
catContainer.appendChild(box)

    })
})

