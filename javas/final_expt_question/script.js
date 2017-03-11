console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);


function div() {
	var no1 = document.getElementById("no1").value;
	var no2 = document.getElementById("no2").value;

	if (no1 > no2) {
		var first = no1 ;
		var second = no2 ;
	}

	else {
		var first = no2 ;
		var second = no1 ;
	}

	var rem = first % second ;
	document.getElementById("result").innerHTML = "Remainder :"+rem ;

	var display = document.querySelector("#title").textContent ;
	display = "And Remainder is : "+rem+" !!!!" ;
	document.querySelector("h1").textContent = display ;
}


