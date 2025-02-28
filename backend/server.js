const  express = require('express')
const dotenv = require('dotenv').config()
const db = require('./dbConnection')
const cors = require('cors')
const agentRoute = require('./routes/agentRoute')
const spaceRoute = require('./routes/spaceRoute')
const blogRoute = require('./routes/blogRoute')

dotenv
const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
}))

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', agentRoute)
app.use('/space', spaceRoute )
app.use('/blog', blogRoute)

app.listen(process.env.PORT, () => { console.log(`App listening on PORT ${process.env.PORT} `)})