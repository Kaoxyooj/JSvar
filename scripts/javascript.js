"use strict";
/*var hours;
var paid;
var total;


hours= 37;
paid= 22.50;
total= hours*paid;


console.log(total);*/
function pay(hours, paid){

var hours;
var paid;
var overtime;
var total;
var regPay;
var otHours;
var otPay;
var otTotal;
var rounded;

hours = prompt("How many hours did you work?");
paid = prompt("How much do you get paid per hour?");
overtime= paid * 1.5;
total = hours * paid;
regPay= 40 * paid;
otHours= hours - 40;
otPay= overtime * otHours;
otTotal	= otPay + regPay;
rounded = Math.ceil(otTotal * 100)/100;

	if (hours < 41 ) {
    	console.log(total);
	}else if (hours > 40) {
    	console.log(rounded);
}
};

pay();


