var dt = new Date();
var diasem = dt.getDay();
var dia = dt.getDate();
var mes = dt.getMonth();
var ano = dt.getFullYear();

var meses = [
	"Janeio",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

var semanas = [
	"Domingo",
	"Segunda-Feira",
	"Terça-Feira",
	"Quarta-Feira",
	"Quinta-Feira",
	"Sexta-Feira",
	"Sábado",
];

var itemId;
var item;

const newDate = `${semanas[diasem]}, ${dia} de ${meses[mes]} de ${ano}`;

setTimeout(() => {
	if (document.getElementById("date")) {
		document.getElementById("date").innerHTML = newDate;
	}
}, 1);

function addTask() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("task").value;
	var t = document.createTextNode(inputValue);

	li.appendChild(t);

	if (inputValue === "") {
		alert("Campo vazio!!");
	} else {
		document.getElementById("MyList").appendChild(li);
	}

	document.getElementById("task").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	li.addEventListener(
		"click",
		function (ev) {
			if (ev.target.tagName === "LI") {
				ev.target.classList.toggle("checked");
			}
		},
		false
	);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		};
	}
}

var myNodelist = document.getElementsByTagName("ul");
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	};
}
