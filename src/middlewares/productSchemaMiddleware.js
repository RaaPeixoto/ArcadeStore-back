import { productSchema } from "../models/productSchema.js";
export function validateProductSchema(req, res, next) {
  const { error } = productSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  next();
}
