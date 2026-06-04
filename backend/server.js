const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();





app.use(cors());





const pool = new Pool({
  host: "db",
  user: "appuser",
  password: "apppass",
  database: "appdb",
  port: 5432,
});

app.get("/api", (req, res) => {
  res.send("Backend server is running!");
});

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Database connected successfully: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database connection failed");
  }
});

app.listen(5050, () => {
  console.log("Server running on port 5000");
});
