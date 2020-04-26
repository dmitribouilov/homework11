//var tableData = require("../data/tableData");
//var waitListData = require("../data/waitinglistData");
//var mysql = require("mysql");
var path = require("path");

var fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.delete("/api/notes/:id", function (req, res) {
    let x = req.params.id;

    

    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (
      err,
      data
    ) {
      //console.log(JSON.parse(data));

      var db = JSON.parse(data);

      db.splice(x,1);

      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(db),
        (err) => {
          if (err) throw err;
         
        }
      );

      return data;
    });




  });


  app.post("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (
      err,
      data
    ) {
      //console.log(JSON.parse(data));

      var db = JSON.parse(data);

      db.push(req.body);

      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(db),
        (err) => {
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        }
      );

      return data;
    });
  });
};
