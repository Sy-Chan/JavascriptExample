function getTime(a, b, c){
  var curr = new Date();
  let ch = curr.getHours();
  let cm = curr.getMinutes();
  let cs = curr.getSeconds();
  let currTime = (ch * 3600000) + (cm * 60000) + (cs * 1000)
  var almTime = (a * 3600000) + (b * 60000) + (c * 1000);
  console.log("Interval =",almTime-currTime);
  var itv = almTime-currTime;
  var myVar = setTimeout(alarm, itv);
}

setTime()

function setTime(){
  for(i=0;i<24;i++){
    append(i, "hour")
  };
  for(i=0;i<60;i++){
    append(i, "minute")
  };
  for(i=0;i<60;i++){
    append(i, "second")
  };
}

function test(){
  var arr = ["hour", "minute", "second"];
  var time = [];
  for (i=0;i<arr.length;i++) {
    var x = document.getElementById(arr[i]).selectedIndex;
    var y = document.getElementById(arr[i]).options[x].text;
    time.push(x);
    }
  var [a, b, c] = time;console.log(a,b,c);
  getTime(a,b,c);

}

function alarm(){
  var curr = new Date();
  let ch = curr.getHours();
  let cm = curr.getMinutes();
  let cs = curr.getSeconds();
  let reminder = document.getElementById('Reminder').value
  play();
  alert(reminder+"\n"+timeSyntax(ch)+":"+timeSyntax(cm)+":"+timeSyntax(cs));
  if (confirm) {
    pause();
  }
}
var aud = document.getElementById('audio');

function play(){
  aud.play();
}

function pause(){
  aud.pause();
}

function timeSyntax(a){
  if (a<10){
    return "0"+a
  }
  else{
    return a
  }
}

function append(a, b){
  var s = document.getElementById(b);
  var node = document.createElement('option');
  var textNode = document.createTextNode(a);
  node.appendChild(textNode);
  s.appendChild(node);
}
