import express from "express";
import { createConnection } from "typeorm";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();
const PORT = 8080;

app.use(express.json());
createConnection().then(connection => {
    app.use("/v1", usuarioRoutes);
    app.use(errorHandlerMiddleware);

});

app.listen(PORT, () => console.log("O servidor está rodando na porta " + PORT));