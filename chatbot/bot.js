const chatbox = document.getElementsByTagName('input')[0].value;
const sendbtn =  document.getElementById("sendbtn");

function sendmsg(txt) {
  chatbox = txt;
  sendbtn.click();
}

var i = 0;

function startbot() {
setInterval( function bot() {
  i++;
  sendmsg("Bot sends message " + Math.cos(i));
}, 3000);
}

function stopbot() {
  setTimeout(bot);
}
