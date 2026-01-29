const products = [
  { id: "1", name: "Davidoff Coll Water Men EDT 200ml ", category: "Perfumes", description: "Fresco veraniego elegante", price: 180000 },
  { id: "2", name: "Davidoff Coll Water Reborn Men EDT 125ml", category: "Perfumes", description: "Fresco renovado con un toque de Romero ", price: 135000  },
  { id: "3", name: "Dior Sauvage Men EDT 100ml", category: "Perfumes", description: "Aroma intenso elegante y varonil", price: 270000 },
  { id: "4", name: "Cuba Winner Men EDT 100ml", category: "Perfumes", description: "Fresco de uso diario", price: 30000  },
  { id: "5", name: "Cuba Original Men EDT 100ml", category: "Perfumes", description: "Amaderado notas de tabaco y vainilla ", price: 35000  },
  { id: "6", name: "Cuba VIP EDT 100ml", category: "Perfumes", description: "Aroma ligero ideal para climas cálidos y frescos", price: 39000  },
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