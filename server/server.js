import express from 'express';
import { QueryTypes } from 'sequelize';
import db from './db/connection.js';

const PORT = 3000;
const app = express();

app.listen(PORT);

app.get("/", (res, req) => {
    req.send("Hello!");
})

app.get("/view", async(res, req) => {
    const results = await db.query(`
        SELECT * FROM Patients;
    `, {
        type: QueryTypes.SELECT
    })

    req.send(results);
    console.log(results);
})