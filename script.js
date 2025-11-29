const products = [
  { name: "Hammer", category: "hardware", price: 850, available: true, img:"images/sample1.jpg" },
  { name: "Toy Car", category: "toy", price: 450, available: false, img:"images/sample2.jpg" },
  { name: "Plastic Cup", category: "kitchen", price: 120, available: true, img:"images/sample3.jpg" }
];

function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  list.forEach(item => {
    grid.innerHTML += `
      <div class="product">
        <img src="${item.img}">
        <h4>${item.name}</h4>
        <p>Rs. ${item.price}</p>
        <p class="${item.available ? 'available' : 'not-available'}">
          ${item.available ? '✔ In Stock' : '✘ Not Available'}
        </p>
      </div>
    `;
  });
}

renderProducts(products);

function filterCategory(cat) {
  const filtered = products.filter(p => p.category === cat);
  renderProducts(filtered);
}
