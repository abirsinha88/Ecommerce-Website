import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="product-tile-container">
      <h2>Featured Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="product-tile" >
            <Link to={`/Products/${p.id}`}>
            <img src={p.url} alt="" />
            <h3>{p.name} - ${p.price}</h3>
            <p><strong>Category:</strong> {p.category}</p>
            </Link>            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;