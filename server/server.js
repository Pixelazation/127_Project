import express from 'express';
import cors from 'cors'
import { QueryTypes } from 'sequelize';
import db from './db/connection.js';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json())

app.listen(PORT);

app.get("/", (res, req) => {
    req.send("Hello!");
})

app.get("/view", async(res, req) => {
    const results = await db.query(`
        SELECT * FROM slips;
    `, {
        type: QueryTypes.SELECT
    })

    req.send(results);
    console.log(results);
})