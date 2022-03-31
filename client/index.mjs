import axios from "axios";

//GET PRODUCT
const getProducts = () => {
    const url = 'http://localhost:3000/products';
    axios(url)
    .then(function (response){
        console.log(response.data);
    })
};

getProducts();


/*
(() => {
    console.log("iife");
})()
*/