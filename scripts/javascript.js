"use strict";



function userInputHours() {
	var hour;
	hour = prompt("How many hours did you work?");
	return hour; 	
};
function userInputPay() {
	var pay;
	pay = prompt("How much do you get paid per hour?");
	return pay;
};
function regPay(hr,pa){
	var hour;
	hour = hr * pa;
	return hour;
};
function timeHalf(payPer){
    var half;
    half = payPer * 1.5
    return half;
};
function overTime(hours3) {
    var ot;
    ot = hours3 - 40;
    return ot;
};
function total(pH,oP) {	
    var totalPay;
    totalPay = pH * oP;
    return totalPay;
};
function gTotal(opt,opay) {
    var oot;
    oot = opt + opay;
    return oot;
};
function round(r) {
	var rounded;
    rounded = Math.ceil(r * 100)/100;
    return rounded;
};

function main(){

var hours;
var payHour;
var regularPay;
var payment;
var otPay;
var otTotal;
var pt;
var gTotalv;

hours = userInputHours();
payHour = userInputPay();
regularPay = regPay(hours,payHour);
otPay = timeHalf(payHour);
otTotal = overTime(hours);
payment = (hours - otTotal) * payHour;
pt = total(otPay,otTotal);
gTotalv = gTotal(payment,pt);

if (hours <= 40) {
	console.log(regularPay);
}else if (hours > 40) {
    console.log(round(gTotalv));
};
}

main();