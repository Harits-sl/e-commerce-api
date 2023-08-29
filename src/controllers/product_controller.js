const mysql = require("mysql");
const database = require("../configs/database");
const response = require("../response");

const pool = mysql.createPool(database);

function getAllProducts(req, res) {
  const query = "SELECT * FROM `products`";

  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(query, (err, result) => {
      if (err) throw err;
      response(200, result, "success", res);
    });
  });
}

module.exports = {
  getAllProducts,
};
