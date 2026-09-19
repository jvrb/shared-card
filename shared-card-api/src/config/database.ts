import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
})

export async function testDatabaseConnection() {
    try {
        const client = await pool.connect()
        console.log('Conexão com o PostgreSQL realizada com sucesso!')
        client.release() // Libera o cliente de volta para o pool
    } catch (error) {
        console.error('Erro ao conectar ao PostgreSQL:', error)
    }
}