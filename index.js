// 모듈 추출
const express = require("express");
const querystring = require("querystring");
const url = require("url");

// 서버 생성
var app = express();

// request 이벤트 리스너 설정
app.get("/", (request, response) => {
  let name = request.query.name;
  let key = request.query.key;
  response.send("<h1>" + name + key + "</h1>");
});

// app.use((request, response) => {
//   response.send("<h1>Hello Express</h1>");
// }); // 응답 디폴트에 해당함

// 서버 실행
app.listen(9999, () => {
  //console.log("Server running at http://localhost:9999");
  let url_str = "http://example.com/over/there?name=양윤상&key=180#hash";
  let Parse_url = url.parse(url_str);
  let Query = querystring.parse(Parse_url.query);
  console.log(Query.query);
});
