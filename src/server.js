const proffys = [
    {
        name:"Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8699966543",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name:"João Paulo",
        avatar: "https://avatars3.githubusercontent.com/u/62079201?s=460&u=989e9e41d0dc9e96a75e3355dd13a08dc3749071&v=4",
        whatsapp: "8699966543",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html")//caminho para os arquivos
}

function pageStudy(req, res) {
    return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
}

const express = require('express')
const server = express()

server
.use(express.static("public")) //usar os aquivos da pasta public
.get("/", pageLanding) //rotas 
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.listen(5500)