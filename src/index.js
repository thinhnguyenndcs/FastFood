const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const { urlencoded } = require('express');
const app = express();
const port = 3000;
// Require route 
const route = require('./routes');
//

app.use(express.static(path.join(__dirname,'public')));
//Middleware
app.use(express.urlencoded());
app.use(express.json());
//HTTP logger
app.use(morgan('combined'))

//Template Engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))
// app.get("/login", (req, res) => {
//   res.render("login");
// });

//Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})