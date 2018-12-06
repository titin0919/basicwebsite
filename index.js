const express= require('express')
const path= require('path')
const app= express()

const filePath = path.resolve(__dirname,"public")
 
const PORT = process.env.PORT || 9000

app.use(express.static(filePath))
app.get("/", function (req,res) {
    res.send('Hola Soy Christin')
})

app.get("/about", function (req,res) {
    res.send ('Soy programadora Web')
})

app.get("/contacto", function (req,res) {
    res.send('mi correo es christin-09@hotmail.es')
    
})

app.listen(PORT, function () {
    console.log(`Servidor Iniciado en el puerto ${PORT}` )
}) 
    
