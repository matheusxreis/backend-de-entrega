## Backend de Entregas
> Módulo do Ignite da Rocketseat

Mais um módulo de NodeJS concluído com sucesso, da Rocketseat :smile:.

O módulo, como o título já diz, se trata de um backend de entregas, onde há rotas para o cliente, para o entregador e para as entregas elas mesmas. 

### :pen: Foi utilizado: 
- **NodeJS**: ambiente de desenvolvimento JS.
- **Express**: criação de API REST.
- **Typescript**:superset de JS.
- **Postman**: usado para testar chamadas HTTP.
- **JWT**: utilizado para geração do web token de autenticação.
- **Bcrypt**: utilizado para encriptografar a senha antes de salvar no database.
- **Postgres**: o banco de dados utilizado.
- **Prisma**: a biblioteca de **ORM** utilizada para fazer a conexão com o banco de dados.

### :car: Rotas:

Os módulos da aplicação estão divididos em cliets, deliveryman e deliveries, assim como as tabelas no banco de dados.


**/client:**

- **POST /client**:

   Faz o cadastro de um novo cliente.
   Precisa do username e password do req.body.

- **POST /client/authenticate**:

  Rota para login, que confirma a existência do cliente no banco de dados e retornar um JWT para o frontend.

- **GET /client/deliveries**:

  Lista todos os pedidos feito por aquele cliente.
  É necessário estar autenticado e enviar o token no header.authorization.

**/deliveryman:**

- **POST /deliveryman**:

   Faz o cadastro de um novo entregador.
   Precisa do username e password do req.body.

- **POST /deliveryman/authenticate**:

  Rota para login, que confirma a existência do entregador no banco de dados e retornar um JWT para o frontend.

**/delivery:**

- **POST /delivery**:

  Permite um cliente fazer o cadastro de um novo pedido.
  Precisa do item_name do req.body, enquanto o id do cliente é capturado em uma propriedade da request.
  Somente o cliente tem acesso a rota e é necessário estar autenticado para efetuar um pedido.

- **GET /delivery/available**:

  Retorna todos os pedidos disponíveis para serem pegos por um entregador.
  Somente o entregador tem acesso a rota e é necessário estar autenticado para efetuar um pedido.

- **PUT /delivery/updatedeliveryman/:id**:

  Permite a um entregador escolher um pedido para entregar. 
  Somente o entregador tem acesso a rota e é necessário estar autenticado para efetuar um pedido.
  O id é do pedido é passado via req.params.


Excelente módulo e projeto! Reforçou alguns conceitos referente a SOLID, ao JWT, a ORMs, relações em Banco de Dados e me apresentou uma nova tecnologia extremamente útil: o Prisma.





