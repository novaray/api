const { ApolloServer } = require('apollo-server-express');
const express = require('express');
require('dotenv').config();

// 로컬 모듈 임포트
const db = require('./db');
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// .env 파일에 명시된 포트 또는 포트 4000에서 서버를 실행
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

const app = express();

// DB에 연결
db.connect(DB_HOST);

// 아폴로 서버 설정
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    //context에 db models 추가
    return { models };
  }
});

// 아폴로 그래프QL 미들웨어를 적용하고 경로를 /api로 설정
server.applyMiddleware({app, path: '/api'});

app.listen({port},
  () => console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`)
);