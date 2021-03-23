module.exports = {
  notes: async (parent, args, { models }) => {
    return await models.Note.find();
  },
  note: async (parent, args, { models }) => {
    return await models.Note.findById(args.id);
  },
  // 다음을 기존 module.exports 객체에 추가
  user: async (parent, { username }, { models }) => {
    // 주어진 username과 일치하는 사용자 찾기
    return await models.User.findOne({ username });
  },
  users: async (parent, args, { models }) => {
    // 모든 사용자 찾기
    return await models.User.find({});
  },
  me: async (parent, args, { models, user }) => {
    // 현재 user context에 맞는 사용자 찾기
    return await models.User.findById(user.id);
  }
};
