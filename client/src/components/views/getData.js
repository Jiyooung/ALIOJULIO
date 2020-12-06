let db_data = require('../../data/dataSch');

export const getEvents = async() => {
    let data = await db_data();
    /*
    data = data.filter(element => {
        let key = element.chrgTel.replace('-','');
        let keyNum = parseInt(key);
        return (keyNum % 7 == 0);
    })*/
    data.forEach(element => {
        element['title'] = element.evtNa;
        element['startDate'] = element.evtStDt;
        element['endDate'] = element.evtEndDt;
    });
    return data;
}