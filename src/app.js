const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')
const adminRouter = require('./routers/admin')
const port = process.env.PORT || 3000
require('./db/db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(postRouter)
app.use(adminRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})