# Teste com Prisma NodeJS

Teste inicial com prisma e nodejs para manipular um banco de dados relacional. O tutorial da documentação oficial do primas foi utilizado como base e pode ser encontrado aqui [neste link](https://www.prisma.io/docs/getting-started/quickstart).

## Prisma

O Prisma é um conjunto de ferramentas para banco de dados, incluindo um ORM (_Object-Relational Mapping_) que facilita a interação entre aplicativos e bancos de dados relacionais. Ele oferece suporte a várias linguagens de programação, incluindo TypeScript, JavaScript e Go.

O Prisma tem como objetivo simplificar o acesso e a manipulação de dados no banco de dados por meio de uma interface de programação mais amigável e orientada a objetos. Ele é projetado para trabalhar com uma variedade de bancos de dados relacionais, como MySQL, PostgreSQL e SQLite.

Principais características e componentes do Prisma:

1. **Prisma Client:** É a parte do Prisma que funciona como o ORM. O Prisma Client é gerado automaticamente a partir do seu modelo de dados definido no esquema Prisma, e fornece métodos convenientes para realizar operações no banco de dados.

2. **Prisma Migrate:** É uma ferramenta que permite gerenciar as migrações do banco de dados. Ele facilita a evolução do esquema do banco de dados de forma controlada, permitindo que você versione e aplique alterações no esquema de maneira consistente.

3. **Prisma Studio:** Uma interface gráfica para explorar e gerenciar dados no banco de dados. Ela oferece uma visão visual dos dados e é útil durante o desenvolvimento e depuração.

4. **Esquema Prisma (Prisma Schema):** É onde você define os modelos de dados, os tipos de dados e as relações entre eles. O esquema Prisma é usado para gerar o Prisma Client.

A linguagem de modelagem utilizada no esquema Prisma é declarativa e oferece uma maneira fácil de definir modelos de dados, relações e tipos de dados suportados pelo banco de dados.

Exemplo básico de um esquema Prisma:

```prisma
model User {
  id    Int      @id @default(autoincrement())
  email String   @unique
  name  String
  posts Post[]
}

model Post {
  id    Int      @id @default(autoincrement())
  title String
  content String
  userId Int
  user   User     @relation(fields: [userId], references: [id])
}
```

Neste exemplo, temos dois modelos (`User` e `Post`) com uma relação de um-para-muitos entre eles.

O Prisma é uma ferramenta poderosa para desenvolvedores que desejam simplificar a interação com bancos de dados relacionais em seus aplicativos. É importante consultar a documentação oficial do Prisma para obter informações detalhadas sobre o uso e as melhores práticas, pois a ferramenta pode passar por atualizações e melhorias ao longo do tempo.

Fonte: [ChatGTP](https://chat.openai.com/).

## Criando o projeto

Inicializando o projeto com TypeScript:

```bash
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

Instalando 'Prisma CLI' como uma dependência de desenvolvimento e realizando sua inicialização:

```bash
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
```

Esse último comando cria um diretório 'prisma' com o arquivo de 'Schema' e configura o banco de dados para 'SQLite'.

## Modelando os dados com 'Prisma Schema'

O exemplo abaixo ilustra um cenário de captura de dados de sensores.

```prisma
model Sensor {
  id        Int     @id @default(autoincrement())
  location  String
  code      String  @unique
  name      String?
  readings  Reading[]
}

model Reading {
  id        Int     @id @default(autoincrement())
  createdAt DateTime @default(now())
  value     Float
}
```

Temos dois modelos (Models), `Sensor` e `Reading`. Nesta modelagem cada sensor possui várias leituras. O Sensor tem nome, código, localização e leituras. Cada leitura tem um data de leitura e o seu valor.

## Executando a migração

Criando uma nova migração SQL na pasta `prisma/migrations` e executando o arquivo de migração SQL no banco de dados.

```bash
npx prisma migrate dev --name init
```

Como é a primeira vez que o comando `migrate` é executado, um arquivo `dev.db` é criado na pasta `prisma` conforme especificado no aquivo de variáveis de ambiente, `.env`.

## ORM

ORM significa "Object-Relational Mapping" (Mapeamento Objeto-Relacional). É um conceito utilizado no desenvolvimento de software para facilitar a interação entre sistemas de gerenciamento de banco de dados relacionais (como MySQL, PostgreSQL, SQLite) e linguagens de programação orientadas a objetos.

O principal objetivo de um ORM é fornecer uma camada de abstração entre o código da aplicação e o banco de dados, permitindo que os desenvolvedores manipulem dados no banco de dados usando objetos e métodos, em vez de escrever consultas SQL diretamente. Com o ORM, os desenvolvedores podem interagir com o banco de dados de maneira mais orientada a objetos, o que pode simplificar o desenvolvimento e manutenção do código.

Principais funcionalidades de um ORM:

1. **Mapeamento Objeto-Relacional (ORM):** O ORM mapeia objetos da linguagem de programação para tabelas no banco de dados e vice-versa. Cada linha em uma tabela pode ser representada como um objeto na linguagem de programação.

2. **Abstração de Consultas SQL:** Em vez de escrever consultas SQL diretamente, os desenvolvedores podem usar métodos e consultas em uma linguagem específica do ORM. O ORM traduz essas operações em consultas SQL apropriadas.

3. **Gerenciamento de Relacionamentos:** O ORM geralmente facilita o gerenciamento de relacionamentos entre tabelas, permitindo que os desenvolvedores expressem relações de forma mais natural em código.

4. **Portabilidade do Código:** Como as consultas SQL específicas do banco de dados são encapsuladas pelo ORM, o código da aplicação pode ser mais portável entre diferentes sistemas de gerenciamento de banco de dados.

5. **Facilita Operações CRUD:** Operações CRUD (Create, Read, Update, Delete) são simplificadas, pois o ORM cuida da geração de consultas SQL correspondentes.

Exemplos populares de ORM incluem o Hibernate para Java, o Entity Framework para .NET, o Sequelize para Node.js, e o Prisma para TypeScript/Node.js. Essas ferramentas facilitam o desenvolvimento de aplicativos ao proporcionar uma camada de abstração eficiente entre o código da aplicação e o banco de dados.

Fonte: [ChatGTP](https://chat.openai.com/).

# Referência

- [Vídeo sobre Prisma: ferramenta para facilitar o uso de banco de dados com JavaScript](https://youtu.be/bl2hDCdlhQ0)
- [Get started: Quickstart](https://www.prisma.io/docs/getting-started/quickstart)
