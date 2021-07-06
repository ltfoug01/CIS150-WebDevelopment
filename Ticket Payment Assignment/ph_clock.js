"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Luke Fougerousse
   Date:  11-14-18

   Filename:   ph_clock.js     

*/

/* VARIABLES */
var minsLeft = 0;
var secsLeft = 15;
var timeLeft = minsLeft * 60 + secsLeft;
var clockID = setInterval("countdown()", 1000);

function countdown() {
   minsLeft = Math.floor(timeLeft/60);
   secsLeft = timeLeft - minsLeft*60;
   
   /* ADD LEADING ZEROS IF NECESSARY TO THE MIN AND SEC LEFT */
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   
   /* WRITE THE MIN AND SEC LEFT VARIABLES TO THE CLOCK */
   document.getElementById("minutes").textContent = minsString;
   document.getElementById("seconds").textContent = secsString;
 
   /*CHECKS IF TIME HAS RUN OUT */
   checkTimer();
   
   /* REVISES TIMELEFT VALUES */
   timeLeft--;      
}

function stopClock() {
	document.getElementById("TimeHead").insertAdjacentHTML
	('beforeEnd',"<br />(Order Expired)");
  
	clearInterval(clockID);
}
/* ------------------------------------------------- */

/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
