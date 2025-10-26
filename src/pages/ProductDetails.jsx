import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button"; // shadcn button

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error:", err));
  }, [id]);

  if (!product) return <p className="px-8 py-12">Loading...</p>;

  return (
    <div className="px-8 py-12 grid md:grid-cols-2 gap-12">

      {/* Product Image */}
      <img
        src={`/${product.image}`}
        alt={product.name}
        className="w-full rounded-xl shadow"
      />

      {/* Product Details */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-700">{product.description}</p>
        <p className="text-2xl font-semibold">₹{product.price}</p>

        <Button className="w-full md:w-auto">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
