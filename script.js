function calculate(value) {
	document.getElementById("result").value += value;
}

function clearResult() {
	document.getElementById("result").value = "";
}

function calculateResult() {
	var result = document.getElementById("result").value;
	if (result) {
		document.getElementById("result").value = eval(result);
	}
}
