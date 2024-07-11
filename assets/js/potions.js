export default async function displayProduct() {
  const response = await fetch("../potions.json");
  const productData = await response.json();
  return console.log(productData);
}
