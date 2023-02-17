const rocks = [
    { name: "pet rock", age: 2},
    { name: "Led Zeppelin", age: 50},
    { name: "Dwayne Johnson", age: 47},
    { name: "Neptune", age: 100_000_000_000},

];

const rocksAgedOneYear = rocks.map(rock => ({...rock, age: rock.age + 1}));

console.log(rocks);
const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0);
console.log(evenAgedRocks);