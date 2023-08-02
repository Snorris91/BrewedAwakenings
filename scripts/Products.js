import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
  let html = `<ul>`;

  for (const product of products) {
    html += `<li data-type="product" 
        data-name="${product.name}" 
        data-id="${product.id}" 
        data-price="${product.price}">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const clickTarget = clickEvent.target;
  const targetId = clickTarget.dataset.id;
  if (clickTarget.dataset.type === "product") {
    for (const product of products) {
      if (product.id === parseInt(targetId))
        window.alert(`${product.name} costs
        $${product.price.toFixed(2)}`);
    }
  }
});
