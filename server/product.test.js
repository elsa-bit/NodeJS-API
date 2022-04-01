import { getAll } from "./products.mjs";
import products from "./products.json";

test('Test sur getAll() pour savoir le nombre de produit', () => {
    expect(getAll()).toMatchObject(products);
})