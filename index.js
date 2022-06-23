setInterval(displayclock, 500);
function displayclock() {
  var time = new Date();
  var hrs = time.getHours();
  
  var min = time.getMinutes();
  min = min <= 9 ? "0" + min : min;
  var sec = time.getSeconds();
  sec = sec <= 9 ? "0" + sec : sec;
  var med = "AM";

  if (hrs > 12) {
    med = "PM";
  }
  if (hrs > 12) {
    hrs = hrs - 12;
    hrs = hrs <= 9 ? "0" + hrs : hrs;
  }

  if (hrs == 0) {
    hrs = 12;
  }
  document.getElementById("clock").innerHTML =
    hrs + ":" + min + ":" + sec + "  " + med;
}
// Date
setInterval(displaydate, 500);
function displaydate(){
var date = new Date();
date = date <= 9 ? "0" + date : date;
var year = date.getFullYear();
var month = date.getMonth() + 1;
month = month <= 9 ? "0" + month : month;
var day = date.getDate();
day = day <= 9 ? "0" + day : day;
document.getElementById("Today's_date").innerHTML = day + "-" +  month+ "-" + year;
}

// calendar



