const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/corretores/listar": "/corretores",
  "/corretor/criar": "/corretores",
  "/corretor/detalhar/:id": "/corretores/:id",
  "/corretor/editar/:id": "/corretores/:id",
  "/corretor/deletar/:id": "/corretores/:id",

  "/formasdepagamento/listar": "/formasdepagamento",
  "/formadepagamento/criar": "/formasdepagamento",
  "/formadepagamento/detalhar/:id": "/formasdepagamento/:id",
  "/formadepagamento/editar/:id": "/formasdepagamento/:id",
  "/formadepagamento/deletar/:id": "/formasdepagamento/:id",

  "/imoveiscomerciais/listar": "/imoveiscomerciais",
  "/imovelcomercial/criar": "/imoveiscomerciais",
  "/imovelcomercial/detalhar/:id": "/imoveiscomerciais/:id",
  "/imovelcomercial/editar/:id": "/imoveiscomerciais/:id",
  "/imovelcomercial/deletar/:id": "/imoveiscomerciais/:id",
  
  "/imoveisresidenciais/listar": "/imoveisresidenciais",
  "/imovelresidencial/criar": "/imoveisresidenciais",
  "/imovelresidencial/detalhar/:id": "/imoveisresidenciais/:id",
  "/imovelresidencial/editar/:id": "/imoveisresidenciais/:id",
  "/imovelresidencial/deletar/:id": "/imoveisresidenciais/:id",

  "/inquilinos/listar": "/inquilinos",
  "/inquilino/criar": "/inquilinos",
  "/inquilino/detalhar/:id": "/inquilinos/:id",
  "/inquilino/editar/:id": "/inquilinos/:id",
  "/inquilino/deletar/:id": "/inquilinos/:id",
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
