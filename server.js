import dotenv from "dotenv";
dotenv.config(); // check if added here then why needed inside the ai.service.js file?

import app from "./src/app.js";

app.get("/",(req,res)=>{
    res.send("Server is running");
});

app.listen(3000);