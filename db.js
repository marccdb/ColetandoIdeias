const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./ci.db");

db.serialize(function(){

//Create
db.run(`
    CREATE TABLE IF NOT EXISTS Ideias(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
);`);

//Add
const query = `
        INSERT INTO ideias(
            image,
            title,
            category,
            description,
            link
        ) VALUES(?,?,?,?,?);
`;

const values = [
    "https://image.flaticon.com/icons/svg/2728/2728871.svg",
    "Fazer um curso",
    "Estudo",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Fugiat quas ipsam repudianda",
    "https://www.google.com"
];

db.run(query, values, function(err){
     if(err) return console.log(err)

     console.log(this);
 });


//Check
// db.all(`SELECT * FROM ideias`, function(err, rows){
//     if (err) return console.log(err);

//     console.log(rows);
// })


//Delete
// db.run(`DELETE FROM ideias WHERE id = ?`, [1], function(err){
//     if(err) return console.log(err);

//     console.log("DELETED", this);
// })


})

module.exports = db;