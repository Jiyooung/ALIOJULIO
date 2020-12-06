/**
 * type을 편하게 관리하기 위해 생성된 파일
 */
const types = [
    { name: "견학/탐방" },
    { name: "체험" },
    { name: "교육/강연" },
    { name: "세미나" },
    { name: "공모전" },
    { name: "자원봉사" },
    { name: "문화/예술" },
    { name: "국민참여" },
]

export function getTypes() {
    return types.filter(t => t);
}

const locations = [
    { name: "강원도" },
    { name: "경기도" },
    { name: "경상남도" },
    { name: "경상북도" },
    { name: "광주광역시" },
    { name: "대구광역시" },
    { name: "부산광역시" },
    { name: "서울특별시" },
    { name: "세종시" },
    { name: "울산광역시" },
    { name: "인천광역시" },
    { name: "전라남도" },
    { name: "전라북도" },
    { name: "제주도" },
    { name: "충청남도" },
    { name: "충청북도" },
]

export function getLocations() {
    return locations.filter(l => l);
}