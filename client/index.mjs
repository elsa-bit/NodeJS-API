import axios from "axios";

//GET PRODUCT
const getProducts = () => {
    const url = 'http://localhost:3000/products';
    axios.get(url)
        .then(function (response) {
            console.log(response.data);
        })
};

//ADD PRODUCT
const addProduct = () => {
    const url = 'http://localhost:3000/products';
    const info = {
        name: 'peche',
        quantity: 2
    }
    axios.post(url, info)
        .then(function (response) {
            console.log(response.data);
        })
};

//GET PRODUCT ASYNC
const getProductsAsync = async () => {
    const url = 'http://localhost:3000/products';
    await axios.get(url)
        .then(function (response) {
            console.log(response.data);
        })
};


getProducts();
addProduct();
getProductsAsync();

/*
(() => {
    console.log("iife");
})()
*/