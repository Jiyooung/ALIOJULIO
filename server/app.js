const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const axios = require('axios');
var aliourl = config.alioURI;
var aliokey = config.alioKEY;

//클라이언트에 온 데이터를 서버에서 처리
//application/x-www-form-urlencoded 형식을 잘 가져오도록 도와줌
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 형식을 가져옴
app.use(bodyParser.json());
app.use(cookieParser());

// 알리오 플러스에서 데이터 가져오는 코드
const qs = require('qs');
axios.post(aliourl, qs.stringify({ "X-API-AUTH-KEY" : aliokey, pageSize : 3 }))
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
/*
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

const userRouter = require('./routes/user');

app.use('/api/user',userRouter);
*/
app.get('/', (req, res) => {
    res.send('Hello World! mod test')
})


app.listen(port, () => {
    console.log(`Example app listening at port : ${port}`)
})