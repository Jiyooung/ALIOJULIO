const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const cookieParser = require('cookie-parser');
const { User } = require("../models/User");
const config = require('../config/key');

router.get('/', (req, res) => {
    res.send('Hello World! mod test')
})


//register가 end point
router.post('/register', (req, res) => {
    /*회원가입을 위한 필요한 정보를 client에서 가져오면 이 정보를 데이터베이스에 넣어주는 부분.*/

    //유저모델에 저장됨
    const user = new User(req.body)

    user.save((err, doc) => {//데이터 저장
        //에러인 경우에 클라이언트에게 응답을 돌려줌
        if (err) return res.json({ success: false, err })
        //200은 성공의 의미, json형식 성공함을 돌려보냄
        return res.status(200).json({
            success: true
        })
    })
})

router.post('/login', (req, res) => {
    /*로그인을 위한 부분*/

    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {//이메일 없음
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                })
            }
            //비밀번호가 맞다면 토큰 생성
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                //토큰을 저장한다. ex) 쿠키, 로컬 스토리지 등
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id })
            })
        })
    })
})

router.get('/auth', auth, (req, res) => {
    //여기까지 왔다면 인증되었다는 의미
    res.status(200).json({
        _id: req.user_id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email
    })
})

router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id },
        { token: "" },
        (err, user) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
            })

        }
    )
})


module.exports = router;