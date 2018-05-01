module.exports = function(db) {
  function getPerson(name) {
    return db.query('SELECT $1::int AS number', ['2'])
  }
  return {
    getPerson
  }
}