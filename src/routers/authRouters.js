import { Router } from "express";
import { signInValidation,signUpValidation } from "../middlewares/authValidation";
import {signIn, signUp, updateUser} from "../controllers/authController.js"


const authRouter = Router();
authRouter.post("/user",signInValidation ,signIn);
authRouter.post("/user", signUpValidation, signUp);
authRouter.put("/user/:id", updateUser)