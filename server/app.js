const express = require("express");
const app = express()
const port = 3000
const cors = require("cors")

const pegawaiRouter = require("./routes/pegawaiRoute")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.use("/pegawais", pegawaiRouter)

app.listen(port, ()=>{
    console.log("listen on port " + port);
    
})