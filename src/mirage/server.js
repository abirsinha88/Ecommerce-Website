import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    routes() {
      this.namespace = "api"; // all routes prefixed with /api

      // Mock product data
      let products = [
        {
          id: "1",
          name: "Check Shirt",
          price: 45,
          description: "Stylish black and white plaid shirt with a relaxed fit.",
          category: "Shirts",
          url: "img-9.jpg"
        },
        {
          id: "2",
          name: "White Dress Shirt",
          price: 55,
          description: "Formal white dress shirt, perfect for office or events.",
          category: "Shirts",
          url: "img-8.jpg"
        },
        {
          id: "3",
          name: "Traditional Garment",
          price: 70,
          description: "Elegant traditional wear with premium fabric.",
          category: "Ethnic",
          url: "img-5.jpg"
        },
        {
          id: "4",
          name: "Orange Sweatshirt",
          price: 35,
          description: "Casual crewneck sweatshirt in bright orange.",
          category: "Sweatshirts",
          url: "img-4.jpg"
        },
        {
          id: "5",
          name: "Blue Shirt",
          price: 40,
          description: "Light blue casual shirt, great for everyday wear.",
          category: "Shirts",
          url: "img-1.jpg"
        },
        {
          id: "6",
          name: "White Sweatshirt",
          price: 65,
          description: "Minimal and modern white outfit, elegant style.",
          category: "Sweatshirts",
          url: "img-10.jpg"
        }
      ];

      // Get all products
      this.get("/products", () => {
        return { products };
      });

      // Get product by id
      this.get("/products/:id", (schema, request) => {
        let id = request.params.id;
        return products.find((product) => product.id === id);
      });
    }
  });
}