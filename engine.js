const express = require("express")
const db  = require("./database")
const path = require("path")
const hbs = require("hbs")


const app = express()
const port = process.env.PORT || 3000 ;
app.use(express.json())
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:false}))
app.set("view engine", "hbs")
hbs.registerPartials(path.join(__dirname,"/views/partials"))


app.get("/",(req,res)=>{
    res.render("home")
})


app.post("/form",(req,res)=>{
    console.log(req.body);
    db.insertMany(req.body)
    .then((data)=>{
        res.render("home")
        
    })
    .catch((err)=>{
        res.send(err).status(404)
    })
})

app.get("/data",(req,res)=>{
    db.find({})
    .then((data)=>{
        res.send(data).status(200)
    })
    .catch((err)=>{
        res.send(err).status(404)
    })
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})