console.log("lab03");

const product1 = {
  name: "iphone",
  isStock: true,
  price: 1000,
};
const product2 = {
  name: "samsung",
  isStock: false,
  price: 900,
};
const product3 = {
  name: "oppo",
  isStock: true,
  price: 500,
};
const product4 = {
  name: "xiaomi",
  isStock: true,
  price: 400,
};
const product5 = {
  name: "nokia",
  isStock: false,
  price: 200,
};

const products = [product1, product2, product3, product4, product5];

console.log("First product:", products[0].name);

console.log("Updating price of product 2:", (products[1].price = 150)); // Price should be a number

products.push({ name: "anc", price: 333, isStock: true });
console.log("Products after adding a new item:", products);

products.pop();
console.log("Products after removing the last item:", products);

console.log("Product names:");
products.forEach((item) => {
  console.log(item.name);
});

console.log("Product prices:");
products.map((item, index) => {
  return console.log(`Price of product ${index + 1}: ${item.price}`);
});

const inStockProducts = products.filter((item) => item.isStock === true);
console.log("Products in stock:", inStockProducts);
