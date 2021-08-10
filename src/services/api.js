export async function getCategories() {
  const results = fetch('https://api.mercadolibre.com/sites/MLB/categories').then((data) => data.json())
    .then((result) => result);
  return results;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const req = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const results = await req.json();
  return results || {};
}



// export async function getCategories() {
//   const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
//   const data = await response.json();
//   return data;
// }

// export async function getProductsFromCategoryAndQuery(categori, query) {
//   const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categori}&q=${query}`);
//   const data = await response.json();
//   return data;
// }
