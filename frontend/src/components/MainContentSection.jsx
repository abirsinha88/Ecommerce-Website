import { Link } from "react-router-dom"
import { ProductCard } from "../components/ProductCard";


export  function MainContentSection({products}){
    return(
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link key={p.id} to={`/products/${p.id}`}>
            <ProductCard product={p} />
          </Link>
        ))}
      </section>
    )
}