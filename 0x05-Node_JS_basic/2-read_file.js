const fs = require('fs');


function countStudents(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log("Cannot load the database")
        }
        if (data) {
            console.log(`Number of students: ${data.length}`)
        }

    })
}
module.exports = countStudents;
