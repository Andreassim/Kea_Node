const express = require('express');
const app = express();

app.use(express.json());

const birdsList = [
    { id: 1 , name: "Common pigeon", genus: "Columba", conservationStatus: "Least Concern", canFly: true},
    { id: 2 , name: "Silvery pigeon", genus: "Columba", conservationStatus: "Critically Endangered", canFly: true},
    { id: 3 , name: "Lemon dove", genus: "Columba", conservationStatus: "Least Concern", canFly: true},
    { id: 4 , name: "Emperor penguin", genus: "Aptenodytes", conservationStatus: "Near Threatened", canFly: false}
]

app.get('/birds', (req, res) => {
    if (Object.keys(req.query).length === 0) {

        res.status(200).send({ data: birdsList });
    } else {
        if(Object.keys(req.query).includes('canFly')){
            const canFly = req.query.canFly == 'true' ? true : false;

            res.status(200).send({ data: birdsList.filter(bird => bird.canFly === canFly)});
        } else {

            res.status(200).send({ data: birdsList });
        }
     }
    });

app.get('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const specificBird = birdsList.find(bird => bird.id === id);
    if (specificBird) {

        res.status(200).send(specificBird);
    } else {

        res.status(404).send("Resource not found")
    }
    });   

app.listen(8080);
