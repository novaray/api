const Query = require('./query');
const Mutation = require('./mutation');
const { GraphQLDateTime } = require('graphql-iso-date');

// 스키마 필드를 위한 리졸버 함수 제공
module.exports = {
  Query,
  Mutation,
  DateTime: GraphQLDateTime
};
