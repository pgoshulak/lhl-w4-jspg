// const pg = require('pg');
const settings = require('./settings')

const knex = require('knex')({
  client: 'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
  }
})

// const people = require('./people')(client);

client.connect((err) => {
  if (err) {
    return console.error('Connection error', err)
  }

  people.getPerson(process.argv[2])
    .then((result) => {
      console.log(`Found ${result.rows.length} results:`);
      result.rows.forEach((row, rowIndex) => {
        let birthdate = `${row.birthdate.getFullYear()}/${row.birthdate.getMonth()}/${row.birthdate.getDate()}`
        console.log(`${rowIndex + 1} - ${row.first_name} ${row.last_name}, born ${birthdate}`)
      })
      client.end();
    })
    .catch((err) => {
      console.error('Error running query', err);
      client.end();
    });
})