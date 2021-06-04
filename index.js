// 모듈 추출
const express = require("express");
const bodyParser = require("body-parser");

// 서버 생성
var app = express();

// get
app.get("/", (request, response) => {
  let name = request.query.name;
  let key = request.query.key;
  response.send("<h1>" + name + key + "</h1>");
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (request, response) => {
  let output = "";
  output += '<form method="post"/>';
  output += '<input type="text" name="a" />';
  output += '<input type="text" name="b" />';
  output += '<input type="submit"/>';
  output += "</form>";

  response.send(output);
});

// 서버 실행
app.listen(9999, () => {
  //console.log("Server running at http://localhost:9999");
  // let url_str = "http://example.com/over/there?name=양윤상&key=180#hash";
  // let Parse_url = url.parse(url_str);
  // let Query = querystring.parse(Parse_url.query);
  // console.log(Query.query);
});
