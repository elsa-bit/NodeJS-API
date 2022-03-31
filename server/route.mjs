import { add, getAll, getByName, update, remove } from "./products.mjs";
import express from "express";
var router = express.Router();

// define the getByName route
router.get('/products/:name', function (req, res) {
    const name = req.params.name
    const result = JSON.stringify(getByName(name));
    res.send(result);
});

// define the getAll route
router.get('/products', function (req, res) {
    const result = JSON.stringify(getAll());
    res.send(result);
});


// define the add route
router.post('/products', (req, res) => {
    const { name, quantity } = req.body;
    res.send(add(name, quantity));
});


//define the remove route
router.delete('/products/:name', function (req, res, next) {
    const name = req.params.name;
    const quantity = req.query.quantity;
    res.send(remove(name, quantity));
})

export default router;