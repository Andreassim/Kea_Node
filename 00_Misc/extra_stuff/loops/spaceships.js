const spaceships = [
    { name: "Chinese Weather Balloon", isPriceless: false, cost: 1_000_000},
    { name: undefined, type: "UFO", isPriceless: true, cost: Number.MAX_SAFE_INTEGER},
    { name: "Apollo 13", versionNumber: 13, isPriceless: false, cost: 2_000_000}
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


const affordableSpaceship = spaceships.find(spaceship => spaceship.cost <= 2_000_000);
console.log(affordableSpaceship);