// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");




module.exports = function(app) {
 
 app.get("/index.js", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
  });

  app.get("/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
   });
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
   
  });

  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


};
