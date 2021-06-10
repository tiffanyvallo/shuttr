
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'tiago',
    password: '',
    database: 'cyber',
    host: 'localhost',
    port: 5432
})

module.exports = pool;