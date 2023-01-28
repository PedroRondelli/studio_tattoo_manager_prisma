import coreJoi from "joi";
import joiDate from "@joi/date";
const joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const clientSchema = joi.object({
  name: joi.string().min(3).required(),
  date: joi.date().format("DD-MM-YYYY").required() ,
  description: joi.string().required(),
  payment: joi.string().required(),
});
