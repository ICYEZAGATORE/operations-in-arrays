const products = [
  { name: "Laptop", price: 800, category: "Electronics" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Table", price: 200, category: "Furniture" },
  { name: "Chair", price: 100, category: "Furniture" },
  { name: "Headphones", price: 50, category: "Electronics" },
  { name: "Shoes", price: 70, category: "Clothing" },
  { name: "Jacket", price: 120, category: "Clothing" },
  { name: "Watch", price: 250, category: "Accessories" },
  { name: "Backpack", price: 90, category: "Accessories" },
  { name: "Sofa", price: 600, category: "Furniture" },
];

// 1️⃣ Add a new product using push
products.push({ name: "Desk", price: 150, category: "Furniture" });

// 2️⃣ Find details of the product "Watch"
const watchProduct = products.find((product) => product.name === "Watch");

// 3️⃣ Get an array of product names using map
const productNames = products.map((product) => product.name);

// 4️⃣ Get products that cost more than 100 using filter
const expensiveProducts = products.filter((product) => product.price > 100);

// 5️⃣ Use forEach to display each product’s name and price in HTML
const productListDiv = document.getElementById("product-list");
products.forEach((product) => {
  const productItem = document.createElement("p");
  productItem.textContent = `Product: ${product.name}, Price: $${product.price}`;
  productListDiv.appendChild(productItem);
});

// 6️⃣ Calculate total cost of all products using reduce
const totalCost = products.reduce((sum, product) => sum + product.price, 0);

// Display JavaScript operation results in HTML
const resultsDiv = document.getElementById("results");

const operationsHTML = `
    <h3>Operations Performed</h3>
    <p><strong>Watch Details:</strong> ${JSON.stringify(watchProduct)}</p>
    <p><strong>Product Names:</strong> ${productNames.join(", ")}</p>
    <p><strong>Expensive Products:</strong> ${expensiveProducts
      .map((p) => p.name)
      .join(", ")}</p>
    <p><strong>Total Cost of Products:</strong> $${totalCost}</p>
`;

resultsDiv.innerHTML = operationsHTML;
