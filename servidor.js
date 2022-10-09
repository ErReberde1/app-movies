import express from 'express'
import cors from 'cors'

const app = express() 

app.set("port", 4000)

const PORT = process.env.PORT || app.get("port")


app.use(express.static('dist')) 
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

