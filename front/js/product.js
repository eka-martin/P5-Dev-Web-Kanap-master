
let url = new URL(window.location.href);
let search_params = url.searchParams;


const id = url.searchParams.get('id');
console.log(id);

// if (search_params.has('id')) {

//     console.log(search_params.get('id'))
// }


// let url = new URL(window.location.href);
// let search_params = url.searchParams;
// console.log(search_params.get('id'));

// let response = fetch('http://localhost:3000/api/service/${id}');
// let response = fetch('http://localhost:3000/api/products/{product-ID}');

// let response = await fetch(`http://localhost:3000/api/products/${id}`)
//    .then((response) => {
//        return response.json();
//    })


//https://stackoverflow.com/questions/54268951/react-fetchapi-how-to-take-data-from-related-json-by-id

fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })












