const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = 8080;

const userRoutes = require('./routes/routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res)=>{
//     res.send("Hello");
// });

// app.use(articles);
app.use('/users', userRoutes)


app.listen(port , ()=>{
    console.log(`Listening to the port ${port}`);
});