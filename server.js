const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/transactions", async (req, res) => {
  try {
    const response = await axios.get("https://indianservers.com/erpsandbox/getAllFeeTransactions.php");
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/student/:id", async (req, res) => {
  try {
    const response = await axios.get(`https://indianservers.com/erpsandbox/getStudDetails.php?studentId=${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
