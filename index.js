const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors())

app.get("/api/dolar", async (req, res) => {
  const { data } = await axios.get("https://www.cronista.com/MercadosOnline/json/getDinamicos.html?tipo=monedas&id=ARS&fechaDesde=03%2F04%2F2019&fechaHasta=05%2F04%2F2019&fbclid=IwAR1OYNeJr43aHlS8VxF_osCk21SEgzbrwBSqKpN8zGhq3eoXYFwSFIX65bI")
    .catch(e => e)

  res.json(data)
})

app.listen(process.env.PORT || 4687)