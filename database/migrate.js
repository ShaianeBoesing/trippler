const argumentos = process.argv.slice(2);

if (argumentos.length < 1) {
  console.log('É necessário fornecer pelo menos 1 argumento.');
  return;
}

const path = argumentos[0];

const connection = require('./connection.js');
const readFile = require('./readSqlFile.js');

const runQueries = async () => {
  const conn = connection();
  const queries = readFile(path);

  for (const query of queries) {
    try {
      await executeQuery(conn, query);
      console.log('Query executada com sucesso:', query);
    } catch (error) {
      console.error('Erro ao executar a query:', query);
      console.error(error);
    }
  }

  conn.end();
};

const executeQuery = (conn, query) => {
  return new Promise((resolve, reject) => {
    conn.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

runQueries();
