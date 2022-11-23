import { Router } from "express";
import { deleteProduct, getProducts, postProduct, updateProduct } from "../controllers/productsController.js";
import { admVerification } from "../middlewares/admVerificationMiddleware.js";
import { validateProductSchema } from "../middlewares/validateProductSchemaMiddleware.js";



const router =Router();

router.get("/products",getProducts);

router.use(admVerification);
router.post("product",validateProductSchema, postProduct);
router.delete("product",deleteProduct);
router.put("product",validateProductSchema,updateProduct);

export default router;