const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt의 길이를 정해주는 변수
const jwt = require('jsonwebtoken');

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

// .pre란 userSchema를 저장하기 전에 일련의 행위를 하겠다는 의미
userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        /*패스워드가 암호화 될때는 패스워드를 변경시킬때만이다. 이걸 구현한 if문
        가입시에도 암호화 되어야 하는데 이것도 여기서 처리, 왜냐면 회원 가입도 결국 패스워드의 변화가 있는 것 이기 때문.*/
        
        //비밀번호를 암호화한다.
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err,hash){//인자 hash가 만들어진 비밀번호이다
                if(err) return next(err);//err메세지를 save(pre 다음에 할일)에 넘겨준다.
                user.password = hash //패스워드를 hash값으로 변경
                next()
            })
        });

    }else{
        next()//save로 향하게 된다
    }

})

userSchema.methods.comparePassword = function(plainPassword, cb){
    /*plainPassword : 클라이언트로부터 받아온 암호화되어 있지 않은 password
    이를 다시 암호화하여 비교*/
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err)
        return cb(null,isMatch)
    })
}
userSchema.methods.generateToken = function(cb) {
    var user = this;
    //jsonWebToken을 이용하여 토큰을 추가하기
    var token = jwt.sign(user._id.toHexString(), 'Token');
    /*
    user._id + 'Token' = token이 만들어짐 (incoding)
    -> 'Token'과 token을 안다면 user._id를 알 수 있음(decoding)
    */

    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null,user)

    })
}

userSchema.methods.findByToken = function(token, cb) {
    var user = this;
    //토큰을 디코딩한다.
    var token = jwt.verify(token, 'Token', function(err, decoded){
        // 유저 아이디를 이용하여 유저를 찾은 다음,
        // 클라이언트에서 가져온 토큰과 데이터베이스에 보관된 토큰이 일치하는지 확인
        user.findOne({"_id":decoded,"token":token}, function(err,user){
            if(err) return  cb(err);
            else return cb(null,user);
        }) 
    });
    /*
    user._id + 'Token' = token이 만들어짐 (incoding)
    -> 'Token'과 token을 안다면 user._id를 알 수 있음(decoding)
    */

    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null,user)

    })
}
const User = mongoose.model('User', userSchema)//스키마를 감싸는 모델

module.exports = { User }//외부에서 사용할 수 있도록 설정