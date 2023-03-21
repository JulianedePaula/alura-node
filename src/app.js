import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

//Tratativa de erro, caso haja erro na conexão com o banco de dados.
db.on("error", console.log.bind(console, 'Erro na conexão com o banco de dados.'));
//Conexão com o banco.
db.once("open", () => {
  console.log('Conexão com o banco de dados feita com sucesso.')
});

const app = express();
app.use(express.json())
routes(app)

export default app