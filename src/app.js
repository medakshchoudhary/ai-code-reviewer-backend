import express from "express";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";

const app = express();


app.use(cors()); // used to allow the use of express's resources because by default it dosent allow to use it 
app.use(express.json()); // used to parse the incoming request with JSON payloads

app.use("/ai", aiRoutes);

export default app;
