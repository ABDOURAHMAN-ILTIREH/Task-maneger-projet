require("dotenv").config;
const app = require('express');




//milldware
app.use(express.json());


// listening ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));