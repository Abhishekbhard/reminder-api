import express from "express";
const app = express();
import remindersRouter from "./routers/reminders";

app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(8000, () => console.log("server started++"));
