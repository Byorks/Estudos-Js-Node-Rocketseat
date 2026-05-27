// Normalmente não usa index.js por não ser tão semantico
import http from "node:http";
import { json } from "./middlewares/json.js";
// Importando módulo interno
// const http = require("http");

// CommomJS => require
// ESModules => import/export
// Para entender o ESModules precisamos colocar type: module no package.json
// O node solicita que nos imports quando for interno do node coloquemos "node:"
// Criamos no package na parte de scripts o "run" que vai deixar mais simples na hora de rodar comandos

// Pontos importantes para saber
// - HTTP
//  - Método HTTP
//  - URL

// Métodos comumente usados em nossas APIS
// GET, POST, PUT, PATCH, DELETE

// GET => Buscar recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Remover um recurso do back-end

// GET /users => Buscando um usuário no back-entender
// POST /users => Criando um usuário no back-end

// Statefull - Stateless
// Statefull vai sempre guardar em memória e precisa para funcionar
// Stateless - não salva nada em memória, salva em bancos de dados ou arquivos de texto

// JSON - Javascript Object Notation

// Cabeçalhos / Headers (req/res) => Metadados - para que o back e front saiba lidar com os dados da melhor forma
// Dessa forma sabe-se como interpretar os dados

// HTTP Status Code
//
const users = [];

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await json(request, response);

  console.log(method, url); // GET /

  if (method === "GET" && url === "/users") {
    // Early return
    return response.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = request.body;
    users.push({
      id: 1,
      name,
      email,
    });

    return response.writeHead(201).end("Criação um usuário");
  }

  return response.writeHead(404).end("Not found");
});

server.listen(3333);
