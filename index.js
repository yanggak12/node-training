// 모듈 추출
var express = require("express");

// 서버 생성
var app = express();

// request 이벤트 리스너 설정
app.get("/page/:id", (request, response) => {
  const id = request.params.id;
  response.send("<h1>" + id + "Page</h1>");
});

app.use((request, response) => {
  response.send("<h1>Hello Express</h1>");
}); // 응답 디폴트에 해당함

// 서버 실행
app.listen(9999, () => {
  console.log("Server running at http://localhost:9999");
});
