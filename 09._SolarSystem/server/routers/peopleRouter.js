import { Router } from "express";
const router = Router();

import db from "../databases/connection.js"

router.get("/people", async (req, res) => {
    const data = await db.all(`SELECT * FROM people;`)

    res.send({people: data})
});

router.post("/people", async(req, res) => {
    if(!req.body.name){
        res.status(400).send({message: "Missing the key (name) in the body"});
    }

    const {lastID} = await db.run("INSERT INTO people (name, home_planet_id) VALUES (?, 3)", [req.body.name])

    res.send({
        id: lastID,
        name: req.body.name
    });
});

export default router;