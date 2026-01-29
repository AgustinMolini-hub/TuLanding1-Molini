const products = [
  { id: "1", name: "Davidoff Coll Water 200ml", category: "perfumes", description: "Fresco veraniego elegante" },
  { id: "2", name: "Dior Sauvage 100ml", category: "perfumes", description: "Aroma intenso elegante y varonil" },
  { id: "3", name: "Cuba Winner 100ml", category: "Perfumes", description: "Fresco de uso diario" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === id)), 1000);
  });
};