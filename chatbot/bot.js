var chatbox = document.getElementsByTagName('input')[0];
var sendbtn =  document.getElementById("sendbtn");

function sendmsg(txt) {
  chatbox.value = txt;
  sendbtn.click();
}

function bot() {
  i++;
  sendmsg("*Bot message:* Did u know the cosine of " + i + " is " + "*" + Math.cos(i) + "*?");
}

var i = 0;

function startbot() {
  setInterval(bot, 3000);
}

function stopbot() {
  clearInterval(bot);
}