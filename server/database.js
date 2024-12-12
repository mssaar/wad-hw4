const Pool = require('pg').Pool;

// this code will work and a table will be created if you have already created the "testWad" database.
const pool = new Pool({
    user: "postgres",
    password: "1234", // Enter your password here
    database: "testWad", // Try to use the same name for your database
    host: "localhost",
    port: "5433"
});

const execute = async(query1, mdealol, query2) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query1); // sends first query to create the first table
        console.log("First table created");
        await pool.query(mdealol); // inserts initial post into "posttable"
        console.log("Data inserted into 'posttable'");
        await pool.query(query2); // sends second query to create the second table
        console.log("Second table created");
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
        "urllink" VARCHAR(200)  
    );`;

const createTblQuery2 = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

// A function to execute the previous queries   
execute(createTblQuery1, mdealol, createTblQuery2).then(result => {
    if (result) {
        console.log('If they do not exist, the tables "users" and "posttable" have been created, and data has been added to "posttable".');
    }
});

module.exports = pool;
