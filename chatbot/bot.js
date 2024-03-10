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
  bot();
  bot = setInterval(bot, 3000);
}

function stopbot() {
  clearInterval(bot);
}

function spam(msg, antimute) {
if (!chatbox.value) {
   if (antimute == "true") {
     sendmsg(msg + ", +Anti-mute:" + Math.round(Math.random() * 1000) + "+");
   } else {
    sendmsg(msg);
   }
 }
}

function startspam(ms, msg, antimute) {
  spam(msg, antimute);
  spam = setInterval(function () {
    spam(msg, antimute);
  }, ms);
}

function stopspam() {
  clearInterval(spam);
}
