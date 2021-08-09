export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categori, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categori}&q=${query}`);
  const data = await response.json();
  return data;
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
// console.log(getProductsFromCategoryAndQuery('', 'computador'));
