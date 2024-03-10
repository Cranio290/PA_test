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
  if (!chatbox.value) { //check if empty
    sendmsg("_Bot message:_ Did u know the cosine of " + i + " is " + "*" + Math.cos(i) + "*?");
  }
}

var i = 0;

function startbot() {
  bot = setInterval(bot, 3000);
}

function stopbot() {
  clearInterval(bot);
}

function startspam(ms, msg, antimute) {
  spam = setInterval(function () {
    if (!chatbox.value) {
      if (antimute == "true") {
        sendmsg(msg + ", +Anti-mute:" + Math.round(Math.random() * 1000) + "+";
      } else {
        sendmsg(msg);
      }
    }
  }, ms);
}

function stopspam() {
  clearInterval(spam);
}
