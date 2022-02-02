## Backend de Entregas
> Módulo do Ignite da Rocketseat

Mais um módulo de NodeJS concluído com sucesso, da Rocketseat :smile:.

O módulo, como o título já diz, se trata de um backend de entregas, onde há rotas para o cliente, para o entregador e para as entregas elas mesmas. 

### :star: Regras do Negócio

#### Deve ser possível :+1: : 
- [x] Cadastrar um cliente novo.
- [x] Cadastrar um entregador novo.
- [x] Fazer o login e gerar um JWT.
- [x] Cadastrar um pedido novo.
- [x] O entregador deve ser capaz de registrar o pedido em seu nome.
- [x] Listar todos os pedidos no nome daquele entregador.
- [x] Listar todos os pedidos no nome daquele cliente.
- [x] O entregador deve ser capaz de finalizar o pedido.


#### Não deve ser possível :-1: :
- [x] Cadastrar um cliente com um username existente.
- [x] Cadastrar um entregador com username existente.
- [x] Se autenticar com senha ou username errados.
- [x] Fazer requisições, exceto login e cadastrar, sem estar autenticado.
- [x] O cliente não deve ser capaz de acessar as rotas do entregador e vice-versa.
- [x] Um entregador não pode finalizar um pedido qual ele não selecionou para fazer.

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

Os módulos da aplicação estão divididos em clients, deliveryman e deliveries, assim como as tabelas no banco de dados.


**/client:**

- **POST /client**:

   Faz o cadastro de um novo cliente.
   Precisa do username e password do req.body.

     Exemplo do que enviar no body:
   ```json
    {
        "username":"matheusxreis",
        "password":"123455678"
    }
   ```

- **POST /client/authenticate**:

  Rota para login, que confirma a existência do cliente no banco de dados e retornar um JWT para o frontend. 
  O username e password são enviados via req.body.

- **GET /client/deliveries**:

  Lista todos os pedidos feito por aquele cliente.
  É necessário estar autenticado e enviar o token no header.authorization.
  O id do cliente é recebido automaticamente após a autenticação.

  Exemplo de como enviar o token no front:
    ```json
    {   
        "Headers": {
            "Authorization":"token"
        }
    }
   ```

**/deliveryman:**

- **POST /deliveryman**:

   Faz o cadastro de um novo entregador.
   Precisa do username e password do req.body.
   

- **POST /deliveryman/authenticate**:

  Rota para login, que confirma a existência do entregador no banco de dados e retornar um JWT para o frontend.
  O username e password são enviados via req.body.
   Exemplo do que enviar no body:
   ```json
    {
        "username":"matheusxreis",
        "password":"123455678"
    }
   ```

  **GET /deliveryman/deliveries**:

  Lista todos os pedidos pegos por aquele entregador.
  É necessário estar autenticado e enviar o token no header.authorization.
  O id do entregador é recebido automaticamente após a autenticação.

  Exemplo de como enviar o token no front:
    ```json
    {   
        "Headers": {
            "Authorization":"token"
        }
    }
   ```

**/delivery:**

- **POST /delivery**:

  Permite um cliente fazer o cadastro de um novo pedido.
  Precisa do item_name do req.body, e o id do cliente é capturado após autenticação.
  Somente o cliente tem acesso a rota e é necessário estar autenticado para efetuar um pedido.
  Exemplo do que enviar no body:
   ```json
    {
        "item_name":"Headphone Multilaser"
    }
   ```

- **GET /delivery/available**:

  Retorna todos os pedidos disponíveis para serem pegos por um entregador.
  Somente o entregador tem acesso a rota e é necessário estar autenticado para efetuar um pedido.

- **PUT /delivery/updatedeliveryman/:id**:

  Permite a um entregador escolher um pedido para entregar. 
  Somente o entregador tem acesso a rota e é necessário estar autenticado para efetuar um pedido.
  O id é do pedido é passado via req.params e o do entregador é passado na autenticação.


- **PUT /delivery/updateenddate/:id**:

  Permite ao entregador qual pegou o pedido finalizar a entrega.
  Somente o entregador tem acesso a rota e é necessário estar autenticado para efetuar um pedido.
  O id é do pedido é passado via req.params e o do entregador é passado na autenticação.


Excelente módulo e projeto! Reforçou alguns conceitos referente a SOLID, ao JWT, a ORMs, relações em Banco de Dados e me apresentou uma nova tecnologia extremamente útil: o Prisma.

That's all folks! Never stop learning! :metal:




