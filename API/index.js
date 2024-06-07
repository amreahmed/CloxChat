const express = require("express");
const axios = require("axios");
const cors = require("cors");

const PORT = 3001;
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
          "https://api.chatengine.io/users/",
          {
            username,
            secret: "b6780019409e8d3bee5030a28ffef105b47792613511075c5ab3a32ad7ebae11",
            first_name: username,
          },
          { headers: { "Private-Key": "0b363ef8-51bf-4838-aeab-81992992e007" } }
        );
        return res.status(r.status).json(r.data)
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});
    
    
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






