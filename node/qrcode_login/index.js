const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { QRCodeModel, UserModel } = require('./models');
const QRCodeNode = require('qrcode');
const moment = require('moment');
const app = express();
const cors = require('cors')
const port = 8888;
//添加中间件
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//鉴权中间件
const authenticated = async (req, res, next) => {
  console.log('判断登陆');
  await next();
}

// 二维码生成接口
app.get('/qrcode/gene', async (req, res) => {
  // qrcode_id
  const qrcode = new QRCodeModel({
    createdAt: Date.now(), //创建时间
    expireAt: moment(Date.now()).add(120, 's').toDate()//过期时间 moment库
  })
  console.log(qrcode);
  await qrcode.save();
//定义一个数据
  let qrcodeData = {
    qrcodeId: qrcode._id,
    createdAt: qrcode.createdAt,
    expireAt: qrcode.expireAt
  }
  // base64
  const qrcodeUrl = await QRCodeNode.toDataURL(JSON.stringify(qrcodeData))
  //接口完成 
  res.send({
    code: 200,
    message: '生成二维码成功',
    data: {
      qrcodeUrl, 
      qrcodeId: qrcode._id
    }
  })

})
// authenticated是鉴权中间件 是一个函数 ，如果没有登录就转去登录 如果登录就next接着往下走
app.post('/qrcode/scanned', authenticated, async(req, res) => {
    console.log('扫码后该做的....');
});

connect();
function listen() {
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen)
  return mongoose.connect('mongodb://localhost:27017/scan-qrcode', {
    keepAlive: 1, 
    useNewUrlParser: true
  })
}
