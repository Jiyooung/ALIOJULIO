const express = require('express');
const app = express();
const config = require('./config/key');
const axios = require('axios');
const Schedule = require('./models/Schedule');
var aliourl = config.alioURI;
var aliokey = config.alioKEY;

// 알리오 플러스에서 데이터 가져오는 코드

const qs = require('qs');

const init = () => {
    axios.post(aliourl, qs.stringify({ "X-API-AUTH-KEY": aliokey, pageSize: 2376 }))
        .then(function (response) {
            console.log("create process");
            let data = response.data;
            for (var i = 2376; i >= 0; i--) {
                try {
                    const schedule = Schedule.create({
                        evtNa: data[i].evtNa,
                        apbaNa: data[i].apbaNa,
                        hostType: data[i].hostType,
                        evtType: data[i].evtType,
                        address: data[i].address,
                        chrgDeptNe: data[i].chrgDeptNe,
                        chrgNa: data[i].chrgNa,
                        chrgTel: data[i].chrgTel,
                        chrgEml: data[i].chrgEml,
                        aplYn: data[i].aplYn,
                        aplStDt: data[i].aplStDt,
                        aplEndDt: data[i].aplEndDt,
                        evtStDt: data[i].evtStDt,
                        evtEndDt: data[i].evtEndDt,
                        evtTime: data[i].evtTime,
                        evtDsc: data[i].evtDsc,
                        payYnNa: data[i].payYnNa,
                        cateNa: data[i].cateNa,
                    });
                    //console.log(schedule.evtNa);
                } catch (err) {
                    console.error(err);
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = init;
