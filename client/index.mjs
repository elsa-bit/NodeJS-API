import axios from "axios";

//GET PRODUCT
const getProducts = () => {
    const url = 'http://localhost:3000/products';
    /*
    axios.get(url)
        .then(function (response) {
            console.log("# getProducts : ");
            console.log(response.data);
        }).catch(function(error) {
        console.log(error);
        });
    */
    return new Promise ((resolve, reject) => {
        axios.get(url).then(function (response) {
            resolve(response.data);
        }).catch(function (error) {
            reject(error);
        });
    })
};

//ADD PRODUCT
const addProduct = () => {
    const url = 'http://localhost:3000/products';
    const info = {
        name: 'poire',
        quantity: 4
    }
    axios.post(url, info)
        .then(function () {
            console.log("\n# addProduct ");
            const name = info.name;
            const quantity = info.quantity;
            console.log(`${quantity} ${name} ajouté(e)(s) \n`);
        }).catch(function (error) {
            console.log(error);
        });
};

//GET PRODUCT ASYNC
const getProductsAsync = async () => {
    const url = 'http://localhost:3000/products';
    await axios.get(url)
        .then(function (response) {
            console.log("# getProductsAsync : ");
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
};



(async () => {
    await getProducts().then((value) => {
        console.log("# getProducts : ");
        console.log(value);
    });
    addProduct();
    getProductsAsync();
})()
