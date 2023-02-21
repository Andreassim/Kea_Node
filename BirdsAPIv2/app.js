const express = require('express');
const app = express();

app.use(express.json());

let birdsListAutoIncrement = 4;
const birdsList = [
    { id: 1 , name: "Common pigeon", genus: "Columba", conservationStatus: "Least Concern", can_fly: true},
    { id: 2 , name: "Silvery pigeon", genus: "Columba", conservationStatus: "Critically Endangered", can_fly: true},
    { id: 3 , name: "Lemon dove", genus: "Columba", conservationStatus: "Least Concern", can_fly: true},
    { id: 4 , name: "Emperor penguin", genus: "Aptenodytes", conservationStatus: "Near Threatened", can_fly: false}
];

app.get('/birds', (req, res) => {
    if(Object.keys(req.query).includes('canFly')){
        const canFly = req.query.canFly == 'true' ? true : false;

        res.status(200).send({ data: birdsList.filter(bird => bird.can_fly === canFly)});
        }

    res.status(200).send({ data: birdsList });
});

app.get('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const specificBird = birdsList.find(bird => bird.id === id);
    if (specificBird) {

        res.status(200).send({ data: specificBird});
    } else {

        res.status(404).send({ data: {}, message: "Resource not found"});
    }
});

app.post('/birds', (req, res) => {
    if(req.body.genus == 'Not a bird'){
        res.status(400).send({message: "Resource not created, not a bird"});
    }
    newBird = {
        id: birdsListAutoIncrement += 1,
        name: req.body.name,
        genus: req.body.genus,
        conservationStatus: req.body.conservationStatus,
        can_fly: req.body.can_fly
    }
    birdsList.push(newBird);

    res.status(200).send({data: newBird ,message: "Resource created"});
});

app.put('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const specificBirdIndex = birdsList.findIndex(bird => bird.id === id);
    if(specificBirdIndex != -1){
        birdsList[specificBirdIndex] = {
            ...req.body,
            id: id
        };

        res.status(200).send({data: birdsList[specificBirdIndex], message: "Resource updated"});
        return;
    }
    res.status(404).send({ data: {}, message: "Resource not found"});
});

//Update only existing keys? or just replace with whatever? mysql way?
app.patch('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const specificBirdIndex = birdsList.findIndex(bird => bird.id === id);
    if(specificBirdIndex != -1){
        birdsList[specificBirdIndex] = {
            ...birdsList[specificBirdIndex],
            ...req.body,
            id: id
        };
        
        res.status(200).send({data: birdsList[specificBirdIndex], message: "Resource updated"});
        return;
    }
    res.status(404).send({ data: {}, message: "Resource not found"});
});


app.delete('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const specificBirdIndex = birdsList.findIndex(bird => bird.id === id);
    if(specificBirdIndex != -1){
        birdsList.splice(specificBirdIndex, 1);

        res.status(200).send({message: "Resource has been removed"});
        return;
    }
    res.status(404).send({message: "Resource not found"});
});

app.listen(8080);
