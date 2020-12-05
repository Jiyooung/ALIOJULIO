let db_data = require('../../data/dataSch');
const sample_data = [
    {
        title: "국립해양박물관 나만의 '독도사랑 깃발' 그리기",
        startDate: "2020-11-01",
        endDate: "2020-11-30",
        id: 0,
        type: "문화/예술",
        location: "부산광역시 영도구 해양로301번길 45 (동삼동) 국립해양박물관",
        tel: "010-20202-0202",
        chrgDeptNe: "국립해양박물관"
    },
    {
        title: "국립해양박물관 [2020오션북페어]",
        startDate: "2020-11-25",
        endDate: "2020-12-05",
        id: 1,
        type: "문화/예술",
        location: "부산광역시 영도구 해양로301번길 45 (동삼동) 해양도서관",
        tel: "1111",
        chrgDeptNe: "국립해양박물관"
    },
    {
        title: "국립해양박물관 [2020오션북페어] 바다책 골든벨",
        startDate: "2020-11-25",
        endDate: "2020-12-05",
        id: 2,
        type: "체험",
        location: "부산광역시 영도구 해양로301번길 45 (동삼동) 해양도서관",
        tel: "23232344",
        chrgDeptNe: "국립해양박물관"
    },
    {
        title: "알려줄리오 오픈 행사",
        startDate: "2020-12-15",
        endDate: "2020-12-16",
        id: 3,
        type: "문화/예술",
        location: "서울특별시 동작구",
        tel: "11231-3123",
        chrgDeptNe: "국립해양박물관"
    },
    {
        title: "이것은 월이 0부터 시작한다.",
        startDate: "2021-01-07",
        endDate: "2021-01-09",
        id: 3,
        type: "교육/강연",
        location: "서울특별시 동작구",
        tel: "11231-3123",
        chrgDeptNe: "국립해양박물관"
    },
    {
        title: "이것은 아래와 같은 형태로 해야 한다. 두자리 수로 맞춰서 해야한다.",
        startDate: "2021-01-20T05:00",
        endDate: "2021-01-20T10:00",
        id: 4,
        type: "견학/탐방",
        location: "서울특별시 동작구",
        chrgDeptNe: "국립해양박물관"
    },
];

//export const alio_data = [{ "evtNa": "국립해양박물관 나만의 '독도사랑 깃발' 그리기", "apbaNa": "국립해양박물관", "hostType": "직접", "hostName": null, "cateNaPath": "행사 > 문화/예술 > 기타", "evtType": "온라인", "address": "부산광역시 영도구 해양로301번길 45 (동삼동) 국립해양박물관", "chrgDeptNe": "국립해양박물관", "chrgNa": "국립해양박물관", "chrgTel": "051-309-1900", "chrgEml": null, "aplYn": "N", "aplStDt": null, "aplEndDt": null, "aplMthUrl": null, "aplMthTel": null, "aplMthEml": null, "aplMthEtc": null, "evtStDt": "2020-11-01", "evtEndDt": "2020-11-30", "evtTime": "24시간", "evtDsc": "독도 사랑의 마음을 담아서 \r\n세상에서 단 하나밖에 없는 나만의 '독도사랑깃발'을\r\n그림, 사진, 드로잉 등으로 자유롭게 표현하여 국립해양박물관 홈페이지에 올려주세요\r\n\r\n상품 : 식사권(국립해양박물관 내 레스토랑 5만원상당) 5장 / 문화상품권 10장\r\n\r\n<응모방법>\r\n1. 국립해양박물관 홈페이지 회원가입 및 로그인을 한다!\r\n2. 관람후기 게시판에서 나만의 '독도사랑 깃발' 작품을 등록한다.( KNMM > 관람후기 > 글쓰기)\r\n3. 심사결과를 기다린다!\r\n* PC로만 참여 가능합니다. \r\n* 여러분의 많은 참여 바랍니다.", "evtTar": "국립해양박물관 홈페이지 가입회원", "actCnt": "제한없음", "payYnNa": "무료", "payDsc": null, "cateNa": "기타" }, { "evtNa": "국립해양박물관 [2020오션북페어]", "apbaNa": "국립해양박물관", "hostType": "직접", "hostName": null, "cateNaPath": "행사 > 견학/탐방 > 전시회", "evtType": "온 · 오프라인", "address": "부산광역시 영도구 해양로301번길 45 (동삼동) 해양도서관", "chrgDeptNe": "해양도서관", "chrgNa": "전지윤 사서", "chrgTel": "051-309-1882", "chrgEml": null, "aplYn": "Y", "aplStDt": "2020-11-25", "aplEndDt": "2020-12-05", "aplMthUrl": "http://www.knmm.or.kr", "aplMthTel": "051-309-1882", "aplMthEml": null, "aplMthEtc": null, "evtStDt": "2020-11-25", "evtEndDt": "2020-12-05", "evtTime": "제한없음", "evtDsc": "O바다책방 북페어\r\n-봄날의 책방(통영), 책방익힘(거제), 문우당(부산), 나이롱책방(제주), 제주풀무질(제주) 등\r\n 바다를 테마로 한 동네 책방, 작은 서점을 만나보세요!\r\n\r\nO해양기관 북페어\r\n- 한국해양수산개발원, 국립수산과학원, 부산해양자연사박물관 등\r\n 해양수산전시관 네트워크 회원관 및 해양관련 기관 출판물을 영상으로 만나보세요!", "evtTar": "누구나", "actCnt": null, "payYnNa": "무료", "payDsc": null, "cateNa": "전시회" }, { "evtNa": "국립해양박물관 [2020오션북페어] 바다책 골든벨", "apbaNa": "국립해양박물관", "hostType": "직접", "hostName": null, "cateNaPath": "행사 > 체험", "evtType": "온 · 오프라인", "address": "부산광역시 영도구 해양로301번길 45 (동삼동) 해양도서관", "chrgDeptNe": "해양도서관", "chrgNa": "전지윤 사서", "chrgTel": "051-309-1882", "chrgEml": null, "aplYn": "Y", "aplStDt": "2020-11-25", "aplEndDt": "2020-11-29", "aplMthUrl": "http://www.knmm.or.kr", "aplMthTel": "051-309-1882", "aplMthEml": null, "aplMthEtc": null, "evtStDt": "2020-11-25", "evtEndDt": "2020-12-05", "evtTime": "본선(오프라인) 2020.12.5(토) 오후 2시", "evtDsc": "O1차예선(온라인)\r\n-2020.11.25(수)~29(일) \r\n-국립해양박물관, 해양도서관, 바다관련 책 등 OX 10문제\r\n\r\nO2차예선(온라인)\r\n-2020.12.1(화)\r\n-1차 예선 통과자\r\n-국립해양박물관, 해양도서관, 바다관련 책 등 OX 5문제, 객관식 5문제\r\n\r\nO3차예선(오프라인)\r\n-2020.12.5(토) 오후2시, 국립해양박물관 대강당\r\n-2차 예선 통과자(15팀)\r\n-국립해양박물관, 해양도서관, 바다관련 책 등 OX문제, 주관식문제\r\n\r\n\r\nO시상내역 : 1등 1팀 10만원(문화상품권) / 2등 2팀 5만원(문화상품권) / 3등 3팀 3만원(문화상품권)\r\n 본선 진출 15팀에게 모두 오션북페어 기념품 증정\r\n", "evtTar": "초등학생1명+보호자1명 ", "actCnt": "2차 예선 통과자 15팀", "payYnNa": "무료", "payDsc": null, "cateNa": "체험" }]

export const getEvents = async() => {
    let data = await db_data();
    data.forEach(element => {
        element['title'] = element.evtNa;
        element['startDate'] = element.evtStDt;
        element['endDate'] = element.evtEndDt;
    });
    //console.log(data);
    return data;
}
//getEvents();
//export default getEvents;