import db from "./connection.js"

const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if(isDeleteMode){
    await db.exec('DROP TABLE IF EXISTS planets')
    await db.exec('DROP TABLE IF EXISTS people')
}


await db.exec(`
    CREATE TABLE IF NOT EXISTS planets 
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        size INT,
        is_habitable BOOLEAN NOT NULL
    )
    `
);

db.exec(
    `
    CREATE TABLE IF NOT EXISTS people
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        home_planet_id INTERGER,
        FOREIGN KEY (home_planet_id) REFERENCES planets (id)

    )
    
    `
);

if(isDeleteMode) {

    //Planets

    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Mercury', False)`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Venus', False)`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Earth', True)`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Mars', False)`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Jupiter', False)`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Saturn', False)`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Uranus', False)`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Neptune', False)`);


    //People

    db.exec(`INSERT INTO people (name, home_planet_id) VALUES ('Andreas', 3)`);
    db.exec(`INSERT INTO people (name, home_planet_id) VALUES ('Torsten', 3)`);
    db.exec(`INSERT INTO people (name, home_planet_id) VALUES ('Henning', 3)`);
    db.exec(`INSERT INTO people (name, home_planet_id) VALUES ('Uncle BOB', 3)`);
    db.exec(`INSERT INTO people (name, home_planet_id) VALUES ('David', 3)`);
}

