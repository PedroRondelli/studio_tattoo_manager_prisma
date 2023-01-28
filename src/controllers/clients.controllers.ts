import { Response, Request } from "express";
import { Client } from "../protocols/client.protocol.js";
import { clientSchema } from "../schemas/client.schema.js";
import {
  checkBill,
  deleteClient,
  findById,
  getClientList,
  makeReservation,
  paidBills,
} from "../repositories/clients.repository.js";

export async function getClientsList(req: Request, res: Response) {
  try {
    const { rows } = await getClientList();
    return res.send(rows);
  } catch (error) {
    return res.send(error);
  }
}

export async function postClient(req: Request, res: Response) {
  const validation = clientSchema.validate(req.body);
  
  if (validation.error) {
    return res.status(400).send(validation.error.message);
  }
  const { name, description, date, payment } = req.body as Client;
  try {
    await makeReservation(name, description, date, payment);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function removeClient(req: Request, res: Response) {
  const exists = await checkIfIdExists(Number(req.params.id));
  console.log(exists)
  if (!exists) {
    return res.status(404).send("Client do not exists");
  }
  try {
    await deleteClient(Number(req.params.id));
    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function checkIfIdExists(id: number) {
  try {
    const { rowCount } = await findById(id);
    if (rowCount === 1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function payTheBill(req: Request, res: Response) {
  const exists = await checkIfIdExists(Number(req.params.id));
  if (!exists) {
    return res.status(404).send("Client do not exists");
  }
  try {
    await checkBill(Number(req.params.id));
    return res.sendStatus(200);
  } catch (error) {
    return res.send(error);
  }
}

export async function howManyPaid(req: Request, res: Response) {
  try {
    const { rows } = await paidBills();
    res.send(rows);
  } catch (error) {
    res.send(error);
  }
}
