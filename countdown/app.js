
export function count (){

const countArea = document.getElementById("eventShow")

const eventName = document.getElementById("eventTitle")
const eventTime = document.getElementById("date")

var countDownDate = new Date(eventTime.value).getTime();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var eventData = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(eventData / (1000 * 60 * 60 * 24));
  var hours = Math.floor((eventData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((eventData % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((eventData % (1000 * 60)) / 1000);

  countArea.innerHTML=eventName.value
  countArea.innerHTML = `Time Reminder:  ${days} days ${hours} hours  ${minutes} minutes
  ${seconds} seconds`
    countArea.classList='count'
    
  // If the count down is over, write some text 
  if (eventData < 0) {
    clearInterval(x);
   countArea.innerHTML = 'Event is now!';
  }
}, 1000);
}