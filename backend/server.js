const  express = require('express')
const dotenv = require('dotenv').config()
const db = require('./dbConnection')
const agentRoute = require('./routes/agentRoute')
const spaceRoute = require('./routes/spaceRoute')
const blogRoute = require('./routes/blogRoute')

dotenv
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', agentRoute)
app.use('/space', spaceRoute )
app.use('/blog', blogRoute)

app.listen(process.env.PORT, () => { console.log(`App listening on PORT ${process.env.PORT} `)})