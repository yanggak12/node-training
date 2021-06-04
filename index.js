// 모듈 추출
var express = require("express");

// 서버 생성
var app = express();

// request 이벤트 리스너 설정
app.use((request, response) => {
  response.send("<h1>Hello Express</h1>");
});

// 서버 실행
app.listen(9999, () => {
  console.log("Server running at http://localhost:9999");
});
