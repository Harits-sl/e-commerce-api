const express = require("express");
const bodyParser = require("body-parser");
const products = require("./src/routes/products");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };

  const fileName = "README.md";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
app.use("/", products);

app.listen(port, () => {
  console.log(`Server Berjalan di Port : http://localhost:${port}`);
});
