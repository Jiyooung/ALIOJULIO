const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt의 길이를 정해주는 변수
const jwt = require('jsonwebtoken');

const scheduleSchema = mongoose.Schema({
    evtNa: {
        type: String,
        maxlength: 50
    },
    apbaNa: {
        type: String,
        maxlength: 15
    },
    hostType: {
        type: String,
        maxlength: 6,
        default: "직접"
    },
    evtType: {
        type: String,
        maxlength: 8,
        default: "온라인"
    },
    address: {
        type: String,
        maxlength: 50
    },
    chrgDeptNe: {
        type: String,
        maxlength: 50
    },
    chrgNa: {
        type: String,
        maxlength: 50
    },
    chrgTel: {
        type: String,
        maxlength: 50
    },
    chrgEml: {
        type: String,
        trim: true,//공백 삭제
        maxlength: 50
    },
    evtStDt: {
        type: String,
        maxlength: 50
    },
    evtEndDt: {
        type: String,
        maxlength: 50
    },
    evtTime: {
        type: String,
        maxlength: 50
    },
    evtDsc: {
        type: String,
        maxlength: 100
    },
    payYnNa: {//유료, 무료 여부
        type: String,
        maxlength: 6,
        default: "무료"
    },
    payDsc: {
        type: String,
        maxlength: 100
    },
    cateNa: {//강연,포럼,기타등
        type: String,
        maxlength: 6
    },
    token: {
        type: String
    },
    tokenExp: {//유효기간
        type: Number
    }
})

const Schedule = mongoose.model('Schedule', scheduleSchema)//스키마를 감싸는 모델

module.exports = { Schedule }//외부에서 사용할 수 있도록 설정