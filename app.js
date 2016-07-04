var app = require('./config/express.config.js');

app.listen(8000, function(err){
  if(err) console.log(err)
  else console.log("server starts at 8000");
});