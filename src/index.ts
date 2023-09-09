import express from 'express'
import productsRouter from './routes/products'
import cors from 'cors'; // Importa cors

const app = express()

// Habilita CORS
app.use(cors());

app.use(express.json())

const PORT = 3000

app.use('/api/products', productsRouter )

app.listen(PORT, ()=>{
    console.log('Conectado')
})
