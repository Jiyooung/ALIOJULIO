const config = require('./config/key');
const axios = require('axios');
var aliourl = config.alioURI;
var aliokey = config.alioKEY;
let data;
// 알리오 플러스에서 데이터 가져오는 코드

const qs = require('qs');

const init = () => {
    axios.post(aliourl, qs.stringify({ "X-API-AUTH-KEY": aliokey, pageSize: 2376 }))
        .then(function (response) {
            data = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = data;
