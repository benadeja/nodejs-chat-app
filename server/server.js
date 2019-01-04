const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

/**
 * Setup Express app and tell middleware to serve static content
 */
var app = express();
app.use(express.static(publicPath));

/**
 * Bind Express to listener port
 */
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});