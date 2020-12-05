if(process.env.NODE_ENV == 'production'){
//배포 이후의 경우, HEROKU사이트에서 비밀 정보들을 가져오도록 하는 코드
    module.exports = require('./prod');
}
else{
    //로털 작업의 경우
    module.exports = require('./dev');
}