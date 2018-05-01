module.exports = function(db) {
  function getPerson(name) {
    let queryString = `
    SELECT * 
    FROM famous_people 
    WHERE first_name LIKE '%'||$1::text||'%'
      OR last_name LIKE '%'||$1::text||'%'
    `
    return db.query(queryString, [name])
  }
  return {
    getPerson
  }
}