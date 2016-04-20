var nodemailer = require('nodemailer');

// 发件人邮箱账号
var userAddress = 'your mailaddress';
// 发件人邮箱密码
var userPassword2= 'xxxx'
// 发件人的邮箱授权码
var userPassword = 'xxxx';
// 发送邮件显示发件人名字
var showUserName = '"your name"<your mailaddress>';
// 收件人邮箱账号
var toUserAddress = 'mailaddress';

var transporter = nodemailer.createTransport({
    service: '163',
    host: "smtp.163.com",
    port: 25,
    secure: true,
    auth: {
      user: userAddress,
      pass: userPassword
    }
});

// var now = new Date();
// var time = now.getFullYear() +'年'+(now.getMonth()+1) + '月'+ new Date().getDate() + '日 ' + now.getHours() + ':' +now.getMinutes() + ':' + now.getSeconds();
var mailOptions = {
    from: showUserName, // sender address
    to: toUserAddress, // list of receivers
    subject: '主题', // Subject line
    text: 'test'
};
var count = 0;
var targetTime = new Date('2016-4-20 11:00:00').getTime();
function mail() {
  var nowTime = new Date().getTime();
  if (nowTime >= targetTime) {
    if(count > 0) return false;
    count++;
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
  } else {
    setTimeout(function() {
      mail();
    }, 50)
  }
}
mail();
