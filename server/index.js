import express from "express"

const port = processs.env.PORT ?? 3000

const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Hola mundo</h1>")
})