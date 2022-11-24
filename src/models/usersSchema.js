import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().required().min(4),
    email: joi.string().email().required().min(4),
    password: joi.string().required().min(4),
    repeat_passord: joi.ref("password"),
    type:joi.string().required().valid("adm", "user")
  });