import express from "express"
import { auth, decodeJWT } from "./routes/authenticate.js"

const app = express()

app.use(express.json())
app.use('/status', (req, res) => {
  res.json({ status: 'ok' })
})
app.use('/auth', decodeJWT, auth)



app.listen(4000, () => {
  console.log('server running at 4000')
})