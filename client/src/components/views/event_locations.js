const locations = [
    { name: "강원도" },
    { name: "경기도" },
    { name: "경상남도" },
    { name: "경상북도" },
    { name: "광주광역시" },
    { name: "대구광역시" },
    { name: "부산광역시" },
    { name: "서울특별시" },
    { name: "세종특별자치시" },
    { name: "울산광역시" },
    { name: "인천광역시" },
    { name: "전라남도" },
    { name: "전라북도" },
    { name: "제주특별자치도" },
    { name: "충청남도" },
    { name: "충청북도" },
  ]
  
  export function getLocations() {
    return locations.filter(l => l);
  }