import dotenv from "dotenv";
dotenv.config(); // check if added here then why needed inside the ai.service.js file?

import app from "./src/app.js";

app.listen(3000, () => {
  console.log("Port live on http://localhost:3000/");
});
