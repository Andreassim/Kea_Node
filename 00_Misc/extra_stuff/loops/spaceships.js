const spaceships = [
    { name: "Chinese Weather Balloon", isPriceless: false},
    { name: undefined, type: "UFO", isPriceless: true},
    { name: "Apollo 13", versionNumber: 13, isPriceless: false}
];

//spaceships.forEach((spaceship, index) => console.log(index));

const chineseSpaceships = spaceships.map(spaceship => ({...spaceship, owner: "China"}))
console.log(chineseSpaceships);
console.log(spaceships);

const pricelessChineseSpaceships = chineseSpaceships.map(spaceship => ({...spaceship, isPriceless: true }))
console.log(pricelessChineseSpaceships);

const pricelessSpaceships = spaceships.filter(spaceship => spaceship.isPriceless === true);
const pricedSpaceships = spaceships.filter(spaceship => spaceship.isPriceless === false);
console.log(pricedSpaceships);
console.log(pricelessSpaceships);