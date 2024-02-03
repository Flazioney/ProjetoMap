//Conexao Banco de Dados 
async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        user: 'postgres',
        database: 'cleanResidence',
        password: 'postgres',
        port: 5432,
        host: 'localhost',
        max: 5,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 5000,
    });
 
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function selectCustomers() {
    const client = await connect();
    const res = await client.query('SELECT * FROM client');
    console.log(res.rows);
    client.release();
    return res.rows;
}
async function selectCompany() {
    const company = await connect();
    const res = await company.query('SELECT * FROM company');
    console.log(res.rows);
    company.release();
    return res.rows;
}

async function selectCustomersId(id) {
    const client = await connect();
    const sql = 'SELECT * FROM client where id=$1';
    const values = [id];
    const result = await client.query(sql, values);
    client.release();
    console.log(result.rows);
    return result.rows;
}

async function insertCustomer(name, phone, email, lat, long){
    const client = await connect();
    const sql = 'INSERT INTO client(name,phone,email,latitude,longitude) VALUES ($1,$2,$3,$4,$5);';
    const values = [name, phone, email, lat, long];
    const result = await client.query(sql, values);

    return result;
}
 
module.exports = { selectCustomers, connect, insertCustomer, selectCustomersId, selectCompany }

//module.exports = { connect }