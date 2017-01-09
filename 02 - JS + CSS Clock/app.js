var secondHand = document.querySelector(".second-hand");
var hourHand = document.querySelector(".hour-hand");
var minuteHand = document.querySelector(".min-hand")

function clock() {
  var date = new Date;
  var second = date.getSeconds();
  var minute = date.getMinutes();
  var hour = date.getHours();

  //hour hand

  var hour_as_degree = ( date.getHours() + date.getMinutes()/60 ) / 12 * 360 + 90;
  hourHand.style.transform = "rotate(" + hour_as_degree + "deg)";

//minute hand
  var minute_as_degree = date.getMinutes() / 60 * 360 + 90;
  minuteHand.style.transform = "rotate(" + minute_as_degree + "deg)";

  //second hand
  var second_as_degree = ( date.getSeconds() + date.getMilliseconds()/1000 ) /60 * 360 + 90;
  secondHand.style.transform = "rotate(" + second_as_degree + "deg)";
  setTimeout(clock, 1000);
}

clock();