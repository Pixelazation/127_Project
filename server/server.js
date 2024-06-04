import express from 'express';
import cors from 'cors'
import { QueryTypes } from 'sequelize';
import db from './db/connection.js';

const PORT = 3000;
const app = express();

app.use(cors());

app.listen(PORT);

app.get("/", (req, res) => {
    res.send("Hello!");
})

app.get("/slip", async(req, res) => {
    const results = await db.query(`
        SELECT * FROM slips;
    `, {
        type: QueryTypes.SELECT
    });

    res.send(results);
    console.log(results);
})

app.delete("/slip/:id", async(req, res) => {
    const id = req.params.id

    await db.query(`
        DELETE FROM slips WHERE SLIP_ID = ${id};
    `, {
        type: QueryTypes.DELETE
    });

    console.log("deleted!");
    res.send(id);
    console.log("sent!");
})

app.get("/slip/:id/orders", async(req, res) => {
    const id = req.params.id

    const results = await db.query(`
        SELECT services.SERV_NAME, PRICE
        FROM services NATURAL JOIN orders
        WHERE SLIP_ID = ${id};
    `, {
        type: QueryTypes.SELECT
    });

    res.send(results);
    console.log(results);
})

app.get("/slip/:id/info", async(req, res) => {
    const id = req.params.id

    const results = await db.query(`
        SELECT * FROM slips WHERE SLIP_ID = ${id};
    `, {
        type: QueryTypes.SELECT
    });

    res.send(results);
    console.log(results);
})