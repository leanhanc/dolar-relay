const express = require("express");
const cors = require("cors");
const axios = require("axios");

process
  .on("unhandledRejection", (reason, p) => {
    console.error(reason, "Unhandled Rejection at Promise", p);
  })
  .on("uncaughtException", (err) => {
    console.error(err, "Uncaught Exception thrown");
    process.exit(1);
  });

const app = express();

app.use(cors());

app.get("/api/dolar", async (_req, res) => {
  const { data } = await axios
    .get("https://mercados.ambito.com//home/general")
    .catch((e) => e);

  if (!data) return res.status(500);

  return res.status(200).json(data);
});

app.listen(process.env.PORT || 4687);
