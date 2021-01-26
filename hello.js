
//create canvas object
var canvas = document.getElementById("myCanvas");
//create 2D drawing
var ctx = canvas.getContext("2d");
//calculate the radius
var radius = canvas.height / 2;
//remap the (0,0)position to the center of canvas
ctx.translate(radius, radius);
//reduce the clock surface to 90% so it is well fit inside canvas
radius = radius * 0.90;
//calling drawClock function
setInterval(drawClock, 1000);
var container =document.getElementById('clock');

//drawClock function that construct all clock components
function drawClock(){
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius){
  //draw a white circle
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  //craete radial gradient at 0.95-1.05 of the radius
  var grad = ctx.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
  //create color stop for the gradient
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  //use the gradient as the stroke style
  ctx.strokeStyle = grad;
  //draw the line width 0.1 of radius
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  //create clock center
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';// black color
  ctx.fill();
}

function drawNumbers(ctx, radius){
  //set font size 0.15 of the radius
  ctx.font = radius * .15 +"px arial";
  //set the text alignment
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  //loop through 1-12 to draw number
  for(var num = 1; num < 13; num++){
    const ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang)
  }
}

function drawTime(){
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  const pi = Math.PI
  var d = daySynt(now.getDay())
  var date = now.getDate()
  var month = now.getMonth()
  var y = now.getFullYear()
  var h = timeSyntax(hour)
  var m = timeSyntax(minute)
  var s = timeSyntax(second)
  container.innerText = date + "/"+month+"/"+y+" "+'\n'+h+":"+m+":"+s+'\n'+ d;
  //hour
  hour%=12
  hour = (hour*pi/6) + (minute*pi/(6*60))+(second*pi/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  //minute
  minute = (minute*pi/30)+(second*pi/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  //second
  second = (second*pi/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
}

function timeSyntax(a){
  if (a<10){
    return "0"+a
  }
  else{
    return a
  }
}

function daySynt(a){
  switch (a) {
    case 0:
      a="Sunday";
      break;
    case 1:
      a="Monday";
      break;
    case 2:
      a="Tuesday";
      break;
    case 3:
      a="Wednesday";
      break;
    case 4:
      a="Thursday";
      break;
    case 5:
      a="Friday";
      break;
    case 6:
      a="Sarturday";
      break;
    default:
      a:"Nice Day";
  }
  return a
}

function drawHand(ctx, pos, length, width){
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
