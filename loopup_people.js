const pg = require('pg');
const settings = require('./settings')

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  databse: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

const people = require('./people')(client);

client.connect((err) => {
  if (err) {
    return console.error('Connection error', err)
  }

  people.getPerson('')
    .then((result) => {
      console.log('result is ', result.rows);
      client.end();
    })
    .catch((err) => {
      console.error('Error running query', err);
      client.end();
    })

  /* client.query('SELECT $1::int AS number', ['1'], (err, result) => {
    if (err) {
      return console.error('Error running query', err);
    }
    console.log(result.rows[0].number);
    client.end();
  }) */
})