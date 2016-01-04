"use strict";
/*var hours;
var paid;
var total;


hours= 37;
paid= 22.50;
total= hours*paid;


console.log(total);*/

var hours;
var paid;
var overtime;
var total;

hours = prompt("How many hours did you work?");
paid = prompt("How much do you get paid per hour?");
overtime= paid * 1.5;
total = hours * paid;

if (hours < 41 ) {
console.log(total);
}else if (hours > 40) {
	var regPay;
	regPay= 40 * paid;
	var otHours;
	otHours= hours - 40;
	var otPay;
	otPay= overtime * otHours;
	var otTotal;
	otTotal	= otPay + regPay;
	var rounded;
	rounded = Math.ceil(otTotal * 100)/100;
	console.log(rounded);
}



