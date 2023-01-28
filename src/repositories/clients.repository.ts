import { QueryResult } from "pg";
import { connectionDb } from "../database/db.js";
import { BillsPaid, ClientEntity } from "../protocols/client.protocol.js";

export function getClientList(): Promise<QueryResult<ClientEntity>> {
  return connectionDb.query("SELECT * FROM clients ORDER BY id DESC");
}

export function makeReservation(
  name: string,
  description: string,
  date: string | Date,
  payment: string
) {
  return connectionDb.query(
    "INSERT INTO clients(name,description,date,payment) VALUES($1,$2,$3,$4)",
    [name, description, date, payment]
  );
}

export function findById(id: number) {
  return connectionDb.query("SELECT * FROM clients WHERE id=$1", [id]);
}

export function deleteClient(id: number) {
  return connectionDb.query("DELETE FROM clients WHERE id=$1", [id]);
}

export function checkBill(id: number) {
  return connectionDb.query("UPDATE clients SET paid = true WHERE id=$1", [id]);
}

export function paidBills(): Promise<QueryResult<BillsPaid>> {
  return connectionDb.query(
    "SELECT COUNT(*) as bills,paid FROM clients GROUP BY paid ;"
  );
}
