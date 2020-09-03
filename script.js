var buttom = document.getElementById("enter");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");

function addItemToList() {
	var isEmpty = true;
	var li = document.createElement("li");
	for (var i = 0; i < input.value.length; i++) {
		if (input.value[i] !== " ") {
			isEmpty = false;
		}
	}

	if (input.value !== "" && !isEmpty) {
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	} else {
		alert("Please, enter something.")
		input.value = "";
	}
}

buttom.addEventListener("click", function() {
	addItemToList();
})

input.addEventListener("keypress", function(event) {
	if (event.keyCode == 13) {
		addItemToList();
	}
})