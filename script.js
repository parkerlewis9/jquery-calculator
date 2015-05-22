$(function() {

	var numberSpans = $("span");
	var screenNum = "";
	var clickedNum = "";
	var numsArr1 = [];
	var numsArr2 = [];
	var total1 = ""
	var operator = ""
	var firstHalf = ""
	var total2 = ""

	function reset() {
		screenNum = "";
		clickedNum = "";
		numsArr1 = [];
		numsArr2 = [];
		total1 = ""
		operator = ""
		firstHalf = ""
		total2 = ""
	}
	numberSpans.click(function(e) {
//When you press a number and haven't yet pressed an operator
		if(e.target.className === "" && firstHalf === "") {
			 clickedNum = this.innerHTML;
			 numsArr1.push(clickedNum);
			 total1 = numsArr1.join("");
			 $("#screen").html(total1);
//If you press an operator thats not return or clear
		} else if (e.target.className === "operator" && e.target.id === "") {
			if(firstHalf === "") {
				 firstHalf = total1
				 clickedNum = this.innerHTML;
				 operator = clickedNum;
				 numsArr1.push(clickedNum);
				 total1 = numsArr1.join("");
				 $("#screen").html(total1);
				 console.log(firstHalf);
				 console.log(operator)
			} 
		} else if (e.target.className === "" && firstHalf !== "") {
			clickedNum = this.innerHTML;
			numsArr2.push(clickedNum);
			total2 = numsArr2.join("");
			$("#screen").html(total1 + total2);
			console.log(total2)
//Equal button
		} else if (e.target.id === "calc") {
			if(operator === "+") {
				$("#screen").html(parseInt(total1) + parseInt(total2));
				reset();
				console.log(firstHalf)
			} else if (operator === "-") {
				$("#screen").html(parseInt(total1) - parseInt(total2));
				reset();
			} else if (operator === "x") {
				$("#screen").html(parseInt(total1) * parseInt(total2));
				reset();
			} else if (operator === "/") {
				$("#screen").html(parseInt(total1) / parseInt(total2));
				reset();
			}
//Clear button
		} else if (e.target.id === "cancel"){
			reset();
			$("#screen").html("");

		}

		// console.log(e)
	})





});