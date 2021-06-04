// 모듈 추출
const express = require("express");
const querystring = require("querystring");
const url = require("url");

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
  //console.log("Server running at http://localhost:9999");
  let url_str =
    "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%96%91%EC%9C%A4%EC%83%81";
  let Parse_url = url.parse(url_str);
  let Query = querystring.parse(Parse_url.query);
  console.log(Query.query);
});
