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
    <div className="featured-container">
      <div className="featured-header">
        <h2>Featured Products</h2>
      </div>
      <div className="featured-content">
      <ul>
        {products.map((p) => (
          <li key={p.id} className="product-tile" >
            <Link to={`/Products/${p.id}`}>
            <img src={p.url} alt="" />
             <p>{p.category}</p>
            <p>{p.name}</p>
           <p>{p.price}</p>
            </Link>            
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Products;