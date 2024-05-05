import express from 'express'
import { Post_Text } from '../views/api.js'
const app = express.Router()

app.post("/imagetotext", Post_Text)

export default app;


