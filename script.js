
$(document).ready(function () {
$('#content').hide().fadeIn(3000); 

var greeting = '[not initialized]';
var name = '[not initialized]';
var message = ', [not initialized]';
var welcome = greeting + name + message;
var sign = '[we are not initialized]';
var tiles = sign.length;
var subTotal = '[not initialized]';
var shipping = '[not initialized]';
var grandTotal = subTotal + shipping;

function clearVars(){
	greeting = '[not initialized]';
	name = '[not initialized]';
	message = ', [not initialized]';
	welcome = greeting + name + message;
	sign = '[not initialized]';
	tiles = 0;
	subTotal = tiles * 5;
	shipping = 0;
	grandTotal = subTotal + shipping;
	
	setTextContentById('greeting', welcome);
	setTextContentById('userSign', sign);
	setTextContentById('tiles', tiles);
	setTextContentById('subTotal', '$' + subTotal);
	setTextContentById('shipping', '$' + shipping);
	setTextContentById('grandTotal', '$' + grandTotal);	
}

function initiateVars() {
	greeting = 'Hello, ';
	name = 'Parker ';
	message = 'Your order ';
	welcome = greeting + name + message;
	sign = 'Custom Sign';
	tiles = sign.length;
	subTotal = tiles * 5;
	shipping = 7;
	grandTotal = subTotal + shipping;
}


function setTextContentById(getId, setMsg){
	var el = document.getElementById(getId);
	el.textContent = setMsg;
}

initiateVars(); 
setTextContentById('greeting', welcome);
setTextContentById('userSign', sign);
setTextContentById('tiles', tiles);
setTextContentById('subTotal', '$' + subTotal);
setTextContentById('shipping', '$' + shipping);
setTextContentById('grandTotal', '$' + grandTotal);
})