// app.js
const http = require("http");
const { Pool } = require("pg");

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "testdb",
  password: "password",
  port: 5432,
});

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT message FROM greetings LIMIT 1");
    const message = result.rows[0].message;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Message from database: ${message}\n`);

    client.release();
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Error connecting to the database\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
