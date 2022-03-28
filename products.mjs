const products = [];

const add = (p) => {
    setTimeout(() => {
        //ajout dans products
        products.push(p);
        console.log(`produit "${p}" ajouté (sync)`);
    }, 1000);
};

const addAsync = (p) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(products.includes(p)) {
                return reject("Can't add the same products")
            }
            products.push(p);
            resolve(p)
        }, 500);
    });
};

const getAll = () => {
    return Array.from(products);
};

export { addAsync, getAll };