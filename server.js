const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/corretores/listar": "/corretores",
  "/corretor/adicionar": "/corretores",
  "/corretor/detalhar/:id": "/corretores/:id",
  "/corretor/editar/:id": "/corretores/:id",
  "/corretor/deletar/:id": "/corretores/:id",

  "/formas_de_pagamento/listar": "/formas_de_pagamento",
  "/forma_de_pagamento/adicionar": "/formas_de_pagamento",
  "/forma_de_pagamento/detalhar/:id": "/formas_de_pagamento/:id",
  "/forma_de_pagamento/editar/:id": "/formas_de_pagamento/:id",
  "/forma_de_pagamento/deletar/:id": "/formas_de_pagamento/:id",

  "/imoveiscomerciais/listar": "/imoveiscomerciais",
  "/imovelcomercial/adicionar": "/imoveiscomerciais",
  "/imovelcomercial/detalhar/:id": "/imoveiscomerciais/:id",
  "/imovelcomercial/editar/:id": "/imoveiscomerciais/:id",
  "/imovelcomercial/deletar/:id": "/imoveiscomerciais/:id",
  
  "/imoveisresidenciais/listar": "/imoveisresidenciais",
  "/imovelresidencial/adicionar": "/imoveisresidenciais",
  "/imovelresidencial/detalhar/:id": "/imoveisresidenciais/:id",
  "/imovelresidencial/editar/:id": "/imoveisresidenciais/:id",
  "/imovelresidencial/deletar/:id": "/imoveisresidenciais/:id",

  "/inquilinos/listar": "/inquilinos",
  "/inquilino/adicionar": "/inquilinos",
  "/inquilino/detalhar/:id": "/inquilinos/:id",
  "/inquilino/editar/:id": "/inquilinos/:id",
  "/inquilino/deletar/:id": "/inquilinos/:id",
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
