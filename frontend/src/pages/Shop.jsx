import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // or Next.js Link
import {ProductCard} from "../components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <Link key={p.id} to={`/shop/${p.id}`}>
            <ProductCard product={p} />
          </Link>
        ))}
      </section>
    </div>
  );
}
