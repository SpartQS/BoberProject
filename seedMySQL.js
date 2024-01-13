var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE bobers;'
var seedQuery = `
  INSERT INTO bobers (title, nick, avatar, about) VALUES 
  ("Руслан", "prostobober", "/images/prostobober.jpg", "Обыкновенный бобр (Castor fiber), или речной бобр, — полуводное млекопитающее отряда грызунов; один из двух современных представителей семейства бобровых (наряду с канадским бобром, которого ранее считали подвидом)."),
  ("Сергей", "voenniibober", "/images/voenniibober.jpg", "Военный Бобер - всегда на защите родины. Обучен секретным приемам"),
  ("Алексей", "orushiibober", "/images/orushiibober.jpg", "Не особо отличается от обычного бобра, просто кричит по разному поводу");
`;
var connection = mysql.createConnection({
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: 'MySQl1234',
            database: 'bobers'
        });
connection.connect()
console.log("Running SQL seed...")
// Drop content
connection.query(drop, err => {
    if (err) {
        throw err
    }
// Seed content
    connection.query(seedQuery, err => {
        if (err) {
            throw err
        }
        console.log("SQL seed completed!")
        connection.end()
    })
})