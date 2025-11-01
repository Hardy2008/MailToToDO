const express = require("express");
const cors = require("cors");
require("dotenv").config();
const todoRoutes = require("./routes/todoRoutes");
const pool = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await pool.connect();
    console.log(`Server läuft auf Port ${PORT} und DB verbunden`);
  } catch (err) {
    console.error("DB-Verbindung fehlgeschlagen", err);
  }
});
