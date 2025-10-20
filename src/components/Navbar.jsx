import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">GLAMOURLY</h1>
      <div className="flex gap-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Shop</Button>
        <Button variant="ghost">Cart</Button>
      </div>
    </nav>
  )
}
 