const express = require("express");

// Initialize Express
const app = express();
app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'ejs')

// Create GET request
app.get("/", (req, res) => {
  res.render('index',{msg:"Working Fine"})
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;