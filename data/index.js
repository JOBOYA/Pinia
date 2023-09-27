const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Heroku définit process.env.PORT

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
