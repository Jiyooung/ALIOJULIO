const mongoose = require('mongoose');
const config = require('../config/key');
var mongoACC = config.mongoACC;
var connection = mongoose.createConnection(mongoACC);
autoIncrement.initialize(connection);

const { Schema } = mongoose;

const scheduleSchema = new Schema({
    ID:{
        type: Number,
        trim:true,
        required: 1,
        Unique: 1
    },
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
        maxlength: 100
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
    aplYn: {
        type: String,
        maxlength: 2
    },
    aplStDt: {
        type: String,
        maxlength: 50
    },
    aplEndDt: {
        type: String,
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
        type: String
    },
    payYnNa: {//유료, 무료 여부
        type: String,
        maxlength: 6,
        default: "무료"
    },
    cateNa: {//강연,포럼,기타등
        type: String,
        maxlength: 10
    }
})

scheduleSchema.plugin(autoIncrement.plugin,{ 
    model : 'scheduleSchema',
    field : 'ID', 
    startAt : 1, //시작 
    increment : 1 // 증가 
});

scheduleSchema.statics.findAll = function () {
    // return promise
    // V4부터 exec() 필요없음
    return this.find({});
};

module.exports = mongoose.model('Schedule', scheduleSchema);
