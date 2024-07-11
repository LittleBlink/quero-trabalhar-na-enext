async function displayProduct() {
  const response = await fetch("../assets/potions.json");
  const data = await response.json();
  //console.log(data.potions);
  const products = Object.values(data.potions);
  console.log(products);

  products.map((item) => {
    const productContent = document.querySelector(".productContent");
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
            <img src="../assets/products/${item.image}" alt="imagem de poção" />
            <h3>${item.name} - <span class="price">$${item.price}</span></h3> 
    `;
    productContent.appendChild(product);
  });
}

displayProduct();
