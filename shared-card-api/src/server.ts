import express, { Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { testDatabaseConnection } from './config/database'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    return res.json({message: "API so Shared Card rodando com sucesso"})
})

app.listen(Number(PORT), () => {
    console.log(`Servidor rodando http://localhost:${PORT}`)

    testDatabaseConnection()
})