import express from "express"
import { auth } from "./routes/login.js"

const app = express()

app.use(express.json())
app.use('/status', (req, res) => {
  res.json({ status: 'ok' })
})
app.use('/auth', auth)



app.listen(4000, () => {
  console.log('server running at 4000')
})