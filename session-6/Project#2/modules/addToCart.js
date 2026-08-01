const products = require("../data/products");
const cart = require("../data/cart");

function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (product) {
        cart.push(product);
        console.log(`${product.name} added to cart.`);
    } else {
        console.log("Product not found.");
    }
}

module.exports = addToCart;