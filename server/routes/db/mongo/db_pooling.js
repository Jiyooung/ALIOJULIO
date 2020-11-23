/**
 * generic-pool 연동
 * mongo 풀 모듈 구현
 */
const config = require('./config/key');

var generic_pool = require("generic-pool");
var mongoClient  = require("mongodb").MongoClient;

var url = config.mongoURI;
if (process.env.VCAP_SERVICES) {
  // cloud env. 설정. 데이터 구조는 2.3.4 VCAP_SERVICES 환경정보 참고
  var cloud_env = JSON.parse(process.env.VCAP_SERVICES);
  var mongo_env = cloud_env["Mongo-DB"][0]["credentials"];

  url = mongo_env.uri;

} else {
  // local env.
  url = 'mongodb://d3e35ad5-9f49-43ae-bc85-08e39ec1d8eb:fc23791e-b2d8-402d-b070-90bfbdb5dcfa@10.30.60.53:27017/e37e541c-75de-4f01-8196-63e2d902e768';
}

var pooling = generic_pool.Pool({
        name:"mongo",
        create:function(cb){
    // create Connection
    mongoClient.connect(url, function(err, db){
      if (err) console.log("mongo 연결오류");
      else {
        cb(err, db);
      }
    });
        },
        destroy:function(myDb){
                myDb.close(function(err){
                        if( err)        console.log("mysql 연결해제오류");
                        else            console.log("mysql 연결해제성공");
                });
        },
        min:3,
        max:5,
        idleTimeoutMillis:1000*500,
        log:false

});


module.exports = pooling;