let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
	//pegar o valor digitado no input
	let valorInput = input.value;

	//se não for vazio, nem nulo, nem indefinido
	if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
		++contador;

		let novoItem = `<div class="item" id="${contador}">
		<div onclick="marcarTarefa(${contador})" class="item-icone">
			<i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
		</div>
		<div onclick="marcarTarefa(${contador})" class="item-nome">
			 ${valorInput}
		</div>	
		<div class="item-botao">
			<button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete">Deletar</i></button>
		</div>
	</div> `;
	/* ${valorInput} = forma de colocar 
	alguma variável quando está tudo dentro das crases */
	// com crase não precisará concatenar as linhas
	
	//adicionar novo item
	main.innerHTML += novoItem;

	//zerar os campinhos
	input.value = "";
	input.focus();



	}
 
}

//deletar uma tarefa conforme o contador
function deletar(id) {
	var tarefa = document.getElementById(id);
	tarefa.remove();
};

function marcarTarefa(id) {
	var item = document.getElementById(id);
	var classe = item.getAttribute('class');
	// console.log(classe);

	if (classe =="item") {
		item.classList.add('clicado');

		var icone = document.getElementById('icone_' +id);
		icone.classList.remove('mdi-circle-outline');
		icone.classList.add('mdi-check-circle');

		//jogar os itens clicados lá para o final
		item.parentNode.appendChild(item);	

	}else{
		item.classList.remove('clicado');

		var icone = document.getElementById('icone_' +id);
		icone.classList.remove('mdi-check-circle');
		icone.classList.add('mdi-circle-outline');	

	}

}

input.addEventListener("keyup", function(event){
	//se teclou enter(13)
	if (event.keyCode === 13) {
		event.preventDefault();
		btnAdd.click();
	}
})