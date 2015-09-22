// set the date we're counting down to
var target_date = new Date("Jan 18, 2016").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var australianOpenCountdown = document.getElementById("australianOpenCountdown");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
<<<<<<< HEAD
    australianOpenCountdown.innerHTML = "<br>" + days + "d, " + hours + "h, "
=======
    australianOpenCountdown.innerHTML = days + "d, " + hours + "h, "
>>>>>>> 6b5a409d9ca260e3d9fbab31966f916b6b438dd4
    + minutes + "m, " + seconds + "s";  
 
}, 1000);
