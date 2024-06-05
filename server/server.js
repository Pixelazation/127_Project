import express from 'express';
import cors from 'cors'
import { QueryTypes } from 'sequelize';
import db from './db/connection.js';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

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

app.post("/slip", async(req, res) => {
    const slip = {
        date: req.body.date,
        fname: req.body.fname,
        lname: req.body.lname,
        doctor: req.body.doctor,
        company: req.body.company,
        requests: req.body.requests
    }

    // const idResponse = await db.query(`
    //     SELECT MAX(SLIP_ID) + 1 as 'id' FROM slips;
    // `, {
    //     type: QueryTypes.SELECT
    // });

    // console.log(idResponse);

    await db.query(`
        INSERT INTO slips VALUES
        (
            (SELECT MAX(SLIP_ID) + 1 FROM orders), '${slip.date}', '${slip.fname}', '${slip.lname}',
            '${slip.doctor}', ${slip.company == "" ? 'null' : slip.company}
        );
    `, {
        type: QueryTypes.INSERT
    });

    await db.query(`
        INSERT INTO orders VALUES
        ${slip.requests.map(service => `((SELECT MAX(SLIP_ID) FROM slips), '${service}')`)}
    `, {
        type: QueryTypes.INSERT
    });

    res.send("");
})

app.delete("/slip/:id", async(req, res) => {
    const id = req.params.id

    await db.query(`
        DELETE FROM slips WHERE SLIP_ID = ${id};
    `, {
        type: QueryTypes.DELETE
    });

    await db.query(`
        DELETE FROM orders WHERE SLIP_ID = ${id};
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


/* ORDERS */
app.get("/orders", async(req, res) => {
    const results = await db.query(`
        SELECT SERV_NAME FROM services;
    `, {
        type: QueryTypes.SELECT
    });
  
    res.send(results);
    console.log(results);
})