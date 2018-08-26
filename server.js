const PORT        = process.env.PORT || 5000;
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Backend connected'});
});