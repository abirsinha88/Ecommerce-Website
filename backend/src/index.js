import express from "express";
import cors from "cors";
import {products} from "../products.js"
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoute from "./routes/cartRoute.js"
import loginRoute from "./routes/loginRoute.js"
import { jwtAuthMiddleware } from "./controllers/userControllers.js";
import cookieParser from "cookie-parser";


dotenv.config()
const app = express();


app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/users",userRoutes);
// app.use("/api/products",jwtAuthMiddleware,productRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",jwtAuthMiddleware,cartRoute);
app.use("/api/login",loginRoute);
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
