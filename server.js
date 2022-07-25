const express = require("express");
const app = express();
//This requires express and allows us to use it inside server.js file
const bodyParser = require("body-parser");
const cors = require("cors");
//middleware
app.use(bodyParser.json());
app.use(cors()); //this allows ALL domains to fetch (access) our API with no issues
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Urlencoded will allow us to extract the data from the form by
// adding to the body property of the request.
const path = require("path");
const port = process.env.PORT || 5000; // Says what port we will be using

// connection to db
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "fat-cat-guitars-db.cpwxit77hftv.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "97Portillo99",
  database: "fat_cat_guitars",
  port: "3306",
});

// app.use(express.static(path.join(__dirname + "fat-cat-guitars/public")));
//
app.use(express.static("fat-cat-guitars/build"));
app.get("*", (req, res) =>
  res.sendFile(
    path.resolve(__dirname, "fat-cat-guitars", "build", "index.html")
  )
);
// const query = "SELECT ProdImg";

db.connect(function (error) {
  if (!!error) console.log(error);
  else console.log("MYSQL Database Connected!");
});

app.get("/api/products", (req, res) => {
  // const sqlSelect = "Select * FROM products";
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
    console.log(result);
  });
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get("/api", (req, res) => {
//   res.json({
//     products: ["product1", "product2", "product3", "product4", "product5"],
//   });
// });

// create a GET route
// app.get("/express_backend", (req, res) => {
//   res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
// }); //This sets a get route that will fetch from client-side React app

// npm run dev wills start up server
// "type": "module", <- put this below name in package-lock.json
