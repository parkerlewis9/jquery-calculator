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
	numberSpans.click(function(e) {
		if(e.target.className === "" && firstHalf === "") {
			 clickedNum = this.innerHTML;
			 numsArr1.push(clickedNum);
			 total1 = numsArr1.join("");
			 $("#screen").html(total1);
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
		}
		//Equal button

		//Clear button

		// console.log(e)
	})





});