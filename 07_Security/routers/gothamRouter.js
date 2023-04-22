import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    if (!req.session.name) {
        return res.send({ message: "Error. You are not welcome in this city."});
    } 
    res.send({ message: `I remember you ${req.session.name} and your hobby is ${req.session.hobby}` });
});

router.get("/:name", (req, res) => {
    req.session.name = req.params.name;
    req.session.hobby = req.query.hobby;
    res.send({ message: `Hi ${req.session.name}` });
});

router.get("/leave", (req, res) => {
    req.session.destroy(() => {
        res.send({});
    });
});

export default router

