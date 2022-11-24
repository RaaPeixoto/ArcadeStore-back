import { Router } from "express";
import { deleteProduct, getProducts, postProduct, updateProduct } from "../controllers/productsController.js";
import { admVerification } from "../middlewares/admVerificationMiddleware.js";
import { validateProductSchema } from "../models/productSchema.js";


const router =Router();

router.get("/products/:id",getProducts);

router.use(admVerification);
router.post("/product",validateProductSchema, postProduct);
router.delete("/product/:id",deleteProduct);
router.put("/product",validateProductSchema,updateProduct);

export default router;