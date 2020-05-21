function addBola() {
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	var p1 = Math.floor(Math.random() * 800);
	var p2 = Math.floor(Math.random() * 600);
	var numero_aleatorio = Math.floor(Math.random() * 8);
	var cores = ['#000000', '#6A5ACD', '#00FFFF', '#006400', '#D2691E', '#7B68EE', '#FF0000', '#FFD700'];

	var cor_aleatoria = cores[numero_aleatorio];

	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:"+cor_aleatoria+";");
	bola.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(bola);
}

function estourar(elemento) {
	document.body.removeChild(elemento);

}
function timer() {
	setInterval(addBola, 800);
}