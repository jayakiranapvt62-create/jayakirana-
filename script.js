// Load products from Firestore
async function loadProducts() {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "<p>Loading...</p>";

    const querySnapshot = await window.getDocs(window.collection(window.db, "products"));
    let products = [];

    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        products.push(data);
    });

    window.allProducts = products;
    displayProducts(products);
}

// Display items on page
function displayProducts(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    items.forEach(item => {
        grid.innerHTML += `
        <div class="product-card">
            <img src="${item.image}" />
            <h4>${item.name}</h4>
            <p>${item.category}</p>
            <p><b>Rs ${item.price}</b></p>

            <p class="stock ${item.stock ? 'in' : 'out'}">
              ${item.stock ? '✔ Available' : '✘ Out of stock'}
            </p>
        </div>
        `;
    });
}

// Filter by category
function filterCategory(cat) {
    let filtered = window.allProducts.filter(p => p.category === cat);
    displayProducts(filtered);
}

// Search
document.getElementById("searchBar").addEventListener("input", function () {
    let text = this.value.toLowerCase();
    let filtered = window.allProducts.filter(p => 
        p.name.toLowerCase().includes(text)
    );
    displayProducts(filtered);
});

// Load products on page start
window.onload = loadProducts;
