//functions
function timeFunction(){
	var x = document.getElementById('month').value;
	if (x=month) {
	let t= t/12;
	}

}

function interest() {
	let p = document.getElementById('p').value;
	let t = document.getElementById('t').value;
	let r = document.getElementById('r').value;

	let i = (p*t*r)/100;

	document.getElementById('info').innerHTML = i;
}