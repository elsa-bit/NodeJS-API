import { addAsync,getAll } from "./products.mjs";

console.log("ASYNC AWAII")
await addAsync("pomme");
console.log(getAll());
console.log("\n");

console.log("# ASYNC THEN");
addAsync("poire").then(() => {
    console.log(getAll());
    console.log("\n");
});


try{
    await addAsync("pomme")
    await addAsync("cherry")
}
catch(error){
    
}

addAsync("peche").then(valRetour => {

}).catch(erreur => {

})


