import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
// routers
import authRouter from "./routers/authRouter.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/nashmi")
  .then(() => {
    console.log("connect success");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

const app = express();
const router = express.Router();
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
app.set("views", path.join(__dirname, "./pagesEjs/views"));
app.set("view engine", "ejs");
app.use(router);
app.use(authRouter);

app.get("/",(req, res) => {
  
  res.render("home.ejs", { name: "khattab" });
});

app.get("/sha7dah",()=>{

})
app.get("/sha7dahitem",()=>{

})
app.get("/sha7dahitem/:id/edit")

// app.get("/auth", (req, res) => {
//   res.render("auth.ejs");
// });

// app.post("/signin", (req, res) => {
//   res.redirect("/");
// });

// app.post("/signup", (req, res) => {
//   res.redirect("/");
// });

app.all("/*", (req, res) => {
  res.send("the page not found");
});

const port = 3100;
app.listen(port, () => {
  console.log(`listen on prot ${port}`);
});
