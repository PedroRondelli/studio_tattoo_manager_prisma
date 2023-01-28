import express, { json } from "express";
import cors from "cors";
import { clientRoutes } from "./routers/clients.routes.js";

const app = express();

app.use(json());
app.use(cors());

app.use(clientRoutes);

app.listen(4000, () => console.log("Executando"));
