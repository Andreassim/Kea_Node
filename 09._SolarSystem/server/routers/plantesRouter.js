import { Router } from "express";
const router = Router();

import db from "../databases/connection.js"

router.get("/planets", async (req, res) => {
    const planets = await db.all(`SELECT * FROM planets;`);

    res.send({data: planets});
});

router.get("/planets/:id", async (req, res) => {
    const planets = await db.get(`SELECT * FROM planets WHERE id = ${req.params.id};`);

    res.send({data: planets});
});


export default router;