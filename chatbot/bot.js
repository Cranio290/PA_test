var chatbox = document.getElementsByTagName('input')[0];
var sendbtn =  document.getElementById("sendbtn");
var bot;
var spam;

function sendmsg(txt) {
  chatbox.value = txt;
  sendbtn.click();
}

function bot() {
  i++;
  sendmsg("_Bot message:_ Did u know the cosine of " + i + " is " + "*" + Math.cos(i) + "*?");
}

var i = 0;

function startbot() {
  bot = setInterval(bot, 3000);
}

function stopbot() {
  clearInterval(bot);
}

function startspam(ms, msg, ) {
  spam = setInterval(function () {
    sendmsg(msg);
  }, ms);
}

function stopspam() {
  clearInterval(spam);
}
