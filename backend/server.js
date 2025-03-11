const  express = require('express')
const dotenv = require('dotenv').config()
const db = require('./dbConnection')
const cors = require('cors')
const agentRoute = require('./routes/agentRoute')
const spaceRoute = require('./routes/spaceRoute')
const blogRoute = require('./routes/blogRoute')
const middleWare = require('./routes/middleWareRoute')
const cookieParser = require('cookie-parser');



dotenv
const app = express()

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
}))

//app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return res.sendStatus(204); // No Content response for preflight
    }

    next();
});


app.use('/api', middleWare)
app.use('/', agentRoute)
app.use('/space', spaceRoute )
app.use('/blog', blogRoute)

app.listen(process.env.PORT, () => { console.log(`App listening on PORT ${process.env.PORT} `)})