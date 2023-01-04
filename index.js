let home= document.getElementById("home");
let guest = document.getElementById("guest");
let num1=0;
let num2=0;

function plusOne (){
	home.textContent = num1+=1;
}


function plusTwo (){
	home.textContent = num1+=2;
}

function plusThree () {
	home.textContent = num1+=3;
}

function plusOne2 (){
	guest.textContent = num2+=1;
}


function plusTwo2 (){
	guest.textContent = num2+=2;

}

function plusThree2 () {
	guest.textContent = num2+=3;
}

function reset () {
	home.textContent = 0;
	guest.textContent = 0;
	num1=0;
	num2=0;
}


