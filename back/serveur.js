import express from 'express'
import router from './routes/routes.js'
import dotenv, { config } from 'dotenv'
dotenv.config()

const PROT = process.env.PORT || 3001

const app = express()

app.use(router)

app.listen(PROT, () => {
    console.log(`Le serveur est lancé sur le port : ${PROT}`)
})