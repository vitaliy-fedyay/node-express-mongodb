const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
const port = process.env.PORT || 3000
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(cors())

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})