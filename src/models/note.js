// 몽구스 라이브러리 요청
const mongoose = require('mongoose');

// 노트의 DB 스키마 정의
const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    // favoriteCount 속성 추가
    favoriteCount: {
      type: Number,
      default: 0
    },
    // favoritedBy 속성 추가
    favoritedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    // Date 자료형으로 createAt, updateAt 필드 할당
    timestamps: true
  }
);

// 스키마와 함께 'Note' 모델 정의
const Note = mongoose.model('Note', noteSchema);

//모듈 익스포트
module.exports = Note;