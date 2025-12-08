import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function ProductCard({ product }) {
  return (
    <Card className="w-64">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <>
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} className="rounded-lg w-full h-48 object-cover" />     
        </Link>
        <p className="text-sm text-gray-600 mt-2">${product.price}</p>
        <Button className="mt-3 w-full">Add to Cart</Button>
        </>
      </CardContent>
    </Card>
  )
}
