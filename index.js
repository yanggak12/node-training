const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://yoonsang:4532@yoon-cluster.boklk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connencted..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello Mongo DB"));

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

app.listen(port, () => console.log(`Example app listening on port ${port} !!`));
