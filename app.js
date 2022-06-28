/*const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");
const counterText = document.getElementById("counterText");
var counterVar = 0;


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
		counterText.style.color="hsl(209, 61%, 16%)";
	}else if(num>0){
		counterText.style.color="green";
	}else{
		counterText.style.color="red";
	}
}

 */

const value = document.querySelector("#counterText");
const btns = document.querySelectorAll(".btn");
var count=0;


btns.forEach(function (btn){
	btn.addEventListener("click", function(e){
		const styles = e.currentTarget.classList;

		if(styles.contains("decrease")){
			count--;
		}else if(styles.contains("increase")){
			count++;
		}else{
			count = 0;
		}

		if (count > 0){
			value.style.color="green";
		}else if(count < 0){
			value.style.color="red";
		}else{
			value.style.color="hsl(209, 61%, 16%)";
		}
		value.textContent=count;
	})
});
 