const express = require("express");
const pg = require("pg");
const cors = require("cors");

const app = express();
const PORT = 7777;
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "date_suggestions",
});

app.use(cors());
app.use(express.json());
//Middle to parse the body of the request

// This is going to be a test query to see if our server API connects to the postgres database

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
  } else {
    console.log(
      "Successfully connected to the database. Server time:",
      res.rows[0].now
    );
  }
});

// end test ^^^^

// Handle the form submission
app.post("/SucessPage", async (req, res) => {
  const { suggestion1, suggestion2, suggestion3, new1, new2, new3 } = req.body;

  try {
    await pool.query(
      "INSERT INTO suggestions (suggestion1, suggestion2, suggestion3, new1, new2, new3) VALUES ($1,$2,$3,$4,$5,$6)",
      [suggestion1, suggestion2, suggestion3, new1, new2, new3]
    );
    console.log(`All changes were submited `);
    res.send("Form submitted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server API error");
  }
});

app.listen(PORT, () => {
  console.log(`ServerAPI listening ${PORT}`);
});
