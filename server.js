const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/rota_1/listar": "/rota_1",
  "/rota_1/criar": "/rota_1",
  "/rota_1/detalhar/:id": "/rota_1/:id",
  "/rota_1/editar/:id": "/rota_1/:id",
  "/rota_1/deletar/:id": "/rota_1/:id",

  "/rota_2/listar": "/rota_2",
  "/rota_2/criar": "/rota_2",
  "/rota_2/detalhar/:id": "/rota_2/:id",
  "/rota_2/editar/:id": "/rota_2/:id",
  "/rota_2/deletar/:id": "/rota_2/:id",

  "/rota_3/listar": "/rota_3",
  "/rota_3/criar": "/rota_3",
  "/rota_3/detalhar/:id": "/rota_3/:id",
  "/rota_3/editar/:id": "/rota_3/:id",
  "/rota_3/deletar/:id": "/rota_3/:id",
  
  "/rota_4/listar": "/rota_4",
  "/rota_4/criar": "/rota_4",
  "/rota_4/detalhar/:id": "/rota_4/:id",
  "/rota_4/editar/:id": "/rota_4/:id",
  "/rota_4/deletar/:id": "/rota_4/:id"
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
