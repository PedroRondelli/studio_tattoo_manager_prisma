import { Router } from "express";
import {
  getClientsList,
  howManyPaid,
  payTheBill,
  postClient,
  removeClient,
} from "../controllers/clients.controllers.js";

export const clientRoutes = Router();

clientRoutes.get("/client", getClientsList);
clientRoutes.post("/client", postClient);
clientRoutes.delete("/client/:id", removeClient);
clientRoutes.patch("/client/:id", payTheBill);
clientRoutes.get("/paid", howManyPaid);
