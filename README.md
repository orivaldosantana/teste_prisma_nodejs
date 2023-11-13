# Teste com Prisma NodeJS
Teste inicial com prisma e nodejs para manipular um banco de dados relacional. O tutorial da documentação oficial do primas foi utilizado como base e pode ser encontrado aqui ![neste link](https://www.prisma.io/docs/getting-started/quickstart).  

## Criando o projeto 

Inicializando o projeto com TypeScript:
```
npm init -y 
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

Instalando 'Prisma CLI' como uma dependência de desenvolvimento e realizando sua inicialização:
```
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

