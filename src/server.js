
//Servidor
const express = require('express')
const server = express()
const {  pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurando NUNJUCKS
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true })) ///receber dados do req.body
.use(express.static("public")) //usar os aquivos da pasta public
.get("/", pageLanding) //rotas 
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500) //start do servidor