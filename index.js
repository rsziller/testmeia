const express = require('express');
const app = express()
app.get('/', (req,res) => res.json({message:'Hola clase'}))
app.listen(3000, function() {
  console.log(`Example app listening on port ${3000}!`)
});