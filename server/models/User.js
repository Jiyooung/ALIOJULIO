const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,//공백 삭제
        unique: 1//똑같은 이메일은 사용 못함
    },
    password: {
        type: String,
        minlength: 8
    },
    name: {
        type: String,
        maslength: 50
    },
    lastname: {
        type: String,
        maslength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {//유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)//스키마를 감싸는 모델

module.exports = { User }//외부에서 사용할 수 있도록 설정