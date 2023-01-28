# studio-tattoo-manager

Application backend for tattoo studio management, an event management solution.

## About

So far this is the beginning of a personal project that aims to implement an application to be used by studio owners.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the properties inside the Pool in database > db.ts

5. Run the back-end in a development environment:

```bash
npm run dev
```

## Documentation

POST: /clients
Body: {
name: "Carlos",
date: "23-02-2023" ,
description: "Tatuagem de águia no peito",
payment: "crétido",
}

GET: /clients --> Returns all clients in descending order sorted by id.

PATCH:/clients/:id --> If the customer exists, mark your tattoo as paid.

DELETE:/clients/:id --> If the customer exists, remove it from the list.

GET:/paid --> Returns a table with the number of customers who paid and who did not pay.
