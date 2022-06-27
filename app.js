const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");
const counterText = document.getElementById("counterText");
var counterVar = 0;
//addEventListener("click", function () {


btnIncrease.addEventListener("click",function(){
	counterText.textContent = counterIncrease();
});

btnDecrease.addEventListener("click",function(){
	counterText.textContent = counterDecrease();
});

btnReset.addEventListener("click",function(){
	counterText.textContent = counterReset();
});

function counterIncrease(){
	counterVar = counterVar+1;
	changeColor (counterVar);
	return counterVar;
}

function counterDecrease(){
	counterVar = counterVar-1;
	changeColor (counterVar);
	return counterVar;
}

function counterReset(){
	counterVar = 0
	changeColor (counterVar);
	return counterVar;

};

function changeColor(num){
	if (num===0){
		counterText.style.color="black";
	}else if(num>0){
		counterText.style.color="green";
	}else{
		counterText.style.color="red";
	}
}