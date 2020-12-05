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