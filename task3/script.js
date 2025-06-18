const btn = document.getElementById('btn');
const inp = document.getElementById('inp');

const tempURL = 'https://dummyjson.com/products/search?q=';

btn.addEventListener('click', () => {
    const URL = tempURL + inp.value;
    fetch(URL)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data).products;
        })
    })