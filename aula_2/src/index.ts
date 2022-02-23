import { Request, Response } from "express";

const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!!")
});


app.listen(PORT, () => {
    console.log("O servidor está funcionando na porta " + PORT)
})