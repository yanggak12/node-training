var express = require("express");
var app = express();

app.listen(9999);

app.get("/", (req, res) => {
  // 클라이언트에서 보내는 모든 정보는 req에 저장 : 요청된 정보들
  res.send("hello world");
  // 응답하기 위한 도구들을 가지고 있는 res
});
