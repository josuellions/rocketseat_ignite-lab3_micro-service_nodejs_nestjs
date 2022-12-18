### Rocketseat - Evento - Ignite LAB - 04

#### Educador: Diego Fernandes

#### Referencia: https://martinfowler.com/

#### Data: 12/12/2022 a 15/12/2022

- Construindo aplicação de microserviços de notificaçoes
- Criando projeto com NESTJS
  > https://docs.nestjs.com/
- Utilizando conceitos de microserviços

##### About

Construindo aplicação de micro-serviços de notificações - Criando projeto com NodeJS e NESTJS - Utilizando conceitos de micro-serviços e arquitetura de software com design patterns, testes automatizados e testes unitários sem necessidade de conexoẽs externas ou banco dados.

##### Instalando NESTJS - GLOBAL

> https://nestjs.com/

```
$ npm i -g @nestjs/cli
```

##### Criando projeto com NESTJS

```
$ nest new project-name
```

##### Rodando projeto local com NESTJS

```
$ npm run start:dev
```

##### Instalando banco dados - PRISMA

```
$ npm i prisma -D
$ npm i @prisma/client
$ npx prisma init --datasource-provider SQLite
```

- Criar a estrutura do schema da tabela
- Criar a migration

```
npx prisma migrate dev
```

- Acessando o banco dados

```
npx prisma studio
```

##### Validação dados

```
$ npm i class-validator class-transformer
```

##### Testes automatizado e unitários

```
$ npm run test
ou
$ npm run test:watch
```

##### REFATORANDO

- DTO: Data transfer Object (Patterns)

##### Gerar relatorio testes

```
$ npm run test:cov
```

##### Configurando os caminhos relativos de import

-> tsconfig.json

##### Refatorando com Patterns Mapper

-> Cria um mapa dos dados para ser automatizado

##### Teste nos arquivos do TypeScript

```
$ npx tsc --noEmit
```

##### Design Patterns

-> Factory : Fabrica de construção de objetos, criar objetos que são reutilizaveis dentro da aplicação.
