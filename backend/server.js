require('dotenv').config()

const app = require("./src/app")

app.listen(3000,(req,res)=>{
    console.log("Port live on http://localhost:3000/")
})
