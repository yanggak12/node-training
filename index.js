const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connencted..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html")); // 랜딩 페이지 : index.html

app.get("/register", (req, res) => res.sendFile(__dirname + "/register.html")); // 회원가입 페이지 get

app.post("/register", (req, res) => {
  // 회원 가입에 필요한 정보 client에서 가져온 것들을 DB에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err }); // error가 있으면 success : false 와 에러메시지 리턴
    return res.status(200).json({
      // 200 : http 상태 코드 - 정상 -> true 리턴
      success: true,
    });
  });
});

app.post("/login", (req, res) => {
  // 요청된 학번이 db에 있는지 찾기
  User.findOne({ snum: req.body.snum }, (err, userInfo) => {
    if (!userInfo) {
      return res.json({
        loginSuccess: false,
        message: "해당 학번에 해당하는 회원 정보가 없습니다.",
      });
    }
    // 요청된 학번이 db에 있으면 비밀번호가 맞는지 확인
    User.findOne({ password: req.body.password }, (err, userInfo) => {
      if (!userInfo) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 일치하지 않습니다.",
        });
      }
    });
    // 로그인 성공
    return res.json({
      loginSuccess: true,
    });
  });
});

app.listen(port, () => console.log(`App is listening on port ${port} !!`));
