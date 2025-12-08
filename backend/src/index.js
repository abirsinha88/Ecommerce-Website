import express from "express";
import cors from "cors";
import {products} from "../products.js"

import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"


const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.urlencoded());
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
// app.get("/api/products",(req,res) => {
//   res.json({products});
// })

// app.get("/api/products/:id", (req, res) => {
//         let id = req.params.id;
//         let requiredProduct = products.find((product) => product.id === id);
//         res.json(requiredProduct);
//       });
// console.log(products);

app.listen(5000, () => console.log("Server running on port 5000"));
