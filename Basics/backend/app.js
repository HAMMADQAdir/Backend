import express from "express";
import cors from "cors"
const app = express();
app.use(cors())

app.get("/get", (req, res) => {
  const d = [ {id:"1",content:"hello"}]
  res.send(d);
});

app.listen("3000",()=>{
    console.log("listen")
})