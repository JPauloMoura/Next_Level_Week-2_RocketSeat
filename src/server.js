//Dados
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

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

//Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")//caminho para os arquivos
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query //dados do form

    //verificar dados vazios
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data) 
        
        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

//configurando NUNJUCKS
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public")) //usar os aquivos da pasta public
.get("/", pageLanding) //rotas 
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.listen(5500) //start do servidor