import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
// routers
import authRouter from "./routers/authRouter.js";
import Sha7dah from "./models/sha7dahModel.js";
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

app.get("/", (req, res) => {
  res.render("home.ejs", { name: "khattab" });
});

app.get("/sha7dah", (req, res) => {});
app.get("/sha7dahitem/:id", async (req, res) => {
  const idFromParams = req.params.id;
  try {
    const sha7dahitem = await Sha7dah.findById(idFromParams);
    console.log(sha7dahitem);
  } catch (error) {
    console.error(error);
  }
  res.send("hello");
});
app.post("/sha7dahitem/:id/create", async (req, res) => {
  const sha7dahitem = await new Sha7dah({
    title: "zkah",
    category: "personal",
    totalAmount: 1222,
    sha7daStatus: "ongoing",
  });
  sha7dahitem.save();
  res.send("item added");
});
app.post("/sha7dahitem/:id/edit", async (req, res) => {});
app.post("/sha7dahitem/:id/delete", async (req, res) => {});

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
