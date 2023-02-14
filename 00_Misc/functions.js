'use strict'

function random(min, max) {
    return Math.floor(Math.random()* (max - min +1)); 
}

const randomAnonymous = function (min, max) {
    return Math.floor(Math.random()* (max - min +1)); 
};

const randomArrowFunction = (min, max) => { 
    return Math.floor(Math.random()* (max - min +1)); 
};

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random()* (max - min +1)); 


function genericActionPerformer(genericAction, genericName) {
    // do stuff...

    return genericAction(genericName);
}

const subtract = (name) => `${name} is substracting`;

const walk = (name) => `${name} is walking`

genericActionPerformer(console.log, genericActionPerformer(subtract, 'Tobias'));
genericActionPerformer(console.log, genericActionPerformer(walk, 'Nicolas'));

const andreaReading = genericActionPerformer((name) => `${name} is reading`, 'Andrea');
console.log(andreaReading);
