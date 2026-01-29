import Item from "./Item";  

function ItemList({ products }) {
  return (
    <div className="row">
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ItemList;