const fs = require('fs');

const readFile = (filePath) => {
    const sql = fs.readFileSync(filePath, 'utf8');

    const queries = sql
        .replace(/(\r\n|\n|\r)/gm, '')
        .split(';')
        .filter(query => query.trim() !== '');

    return queries;
}

module.exports =  readFile;
