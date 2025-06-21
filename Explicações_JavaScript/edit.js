// alert('Alerta rodando de uma página externa');

//      Tipos de saída: document.getElement, document.write, alert, console.log
document.getElementById('texto').innerHTML="Meu primeiro texto <b>JS</b>!"; 
//pegar um elemento cujo id é 'texto' saindo em html um texto
// alert("Isto é um alerta");
console.log("Oi isso é um console.log");

//              Declarações: instruções do JS
// *Sintaxe: maneira como o código deve ser escrito 
// exemplos:
// let a,b,c; a = 5;b = 6;c = 7;


/* function minhafuncao(){
 	document.write('Oi <u> escrito com document.write</u>');
 	document.write('Oi <u> escrito com document.write</u>');
	document.write('Oi <u> escrito com document.write</u>');
 }*/

//                Sintaxe JS
console.log("5 + 5");
var x = 1;
var y = 5;
var z = x * y;
console.log(z);
var PESSOA = "Marcos";
var pessoa = "Mateus";
console.log(PESSOA);
// não se pode usar o hífen na sintaxe em nomes variáveis

/*
              Variáveis
São "recipientes" para armazenar qualquer valor
Em JS, há 3 formas de declarar as variáveis
-var
-let
-const
*/

// let gente = "Mateus";
// let gente = "Jõao";

//var pode ser redeclarado
var x1 = 10; // aqui é 10

{
	var x1 = 2; //aqui é 2
}
//aqui também é 2
document.getElementById('texto3').innerHTML = x1; 

let x2 = 10; // escopo geral

{
	let x2 = 2; //escopo específico
}
//aqui é 10
document.getElementById('texto4').innerHTML = x2; 

const x3 = 10; // só receberá somente este valor

{
	const x3 = 2; // não receberá este
}

document.getElementById('texto5').innerHTML = x3; 


/* 
                    Operadores

Os operadores JS são usados para atribuir valores, comparar valores, 
executar operações aritméticas e muito mais.

São os sinais que usamos : + - * / = ++ -- += -= && || etc...

São separados em "6 categorias":
1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operadores Condicional (Ternário)
6) Operadores Lógicos

*/
//OPERADORES MATEMÁTICOS//

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
// total = valor1 / valor2;
// total = ++valor1; //incremento
// total = --valor1 //decremento
// alert(total);
// alert('O valor1 ficou: ' + valor1);

//OPERADORES DE ATRIBUIÇÃO: =, +=, -=, *=, /=  //

/*valor1 += valor2;*/ //atalho de valor1 = valor1 + valor2
/*valor1 -= valor2;*/ //atalho de valor1 = valor1 - valor2
/*valor1 *= valor2;*/ //atalho de valor1 = valor1 * valor2
/*valor1 /= valor2;*/ //atalho de valor1 = valor1 / valor2

//OPERADORES DE CONCATENAÇÃO OU DE SEQUÊNCIA //

var valor1_0, valor2_0, total_0;
valor1_0 = "Mateus";
valor2_0 = "Brasil";
total_0 = valor1_0 +" "+ valor2_0; //O + separa(tipo . ou , do php)

// alert(total_0);

//OPERADORES DE COMPARAÇÃO: responderá true ou false. == //

var valor1_01, valor2_01, total_01;
valor1_01 = 8;
valor2_01 = 12;
total_01= (valor1_01 == valor2_01); // true (verdadeiro) ou false (falso)
/* quando se usa ===, o JS avalia se o valor e o 
tipo de dado(string, número decimal...) são iguais.
quando se usa !=, significa diferente ou não igual; ou seja, verificará se
valores são diferentes.
!== verifica se o valor e o tipo de dado são diferentes.
< menor que; > maior que; <= menor ou igual; >= maior ou igual 
*/
// alert(total_01);

// OPERADORES CONDICIONAIS (Ternário) //

var idade1, eleitor, resultado;
idade = 72;
eleitor = (idade < 18) ? /*se for true:*/ "Não é eleitor": /* se for false:*/
"Sim, é eleitor"

/*exemplo: 
alert('A resposta é: ' + eleitor + '. A idade dele é: ' + idade); 
*/

// OPERADORES LÓGICOS: && || !

// resultado = (idade > 60 && idade < 70); //true //false
 // resultado = (idade === 65 || idade === 72);
 resultado = !(idade === 65);
/* 
||(ou) 
!() significa que é o contrário do que está entre (), negação
*/

// alert(resultado);

/* 
					FUNÇÕES

Uma função JS é um bloco de código projetado
para executar uma tarefa específica 

É como uma pequena "fábrica" onde você faz uma entrada
e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma
tarefa que vai contribuir para todo código.

Uma função JS é executada quando "algo" a invoca(chama-a).
*/

//FUNÇÃO DE SOMA
function soma(v1, v2) {
	return v1 + v2;
}
//FUNÇÃO DE COTAÇÃO DO DÓLAR
function realParaDolar(real,cotacaoDodolar) {
	return real * cotacaoDodolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

document.getElementById('texto6').innerHTML = soma(10, 20) 
//chamando no elemento 'texto6' a função soma e v1 é 10 e v2 é 10;
 var totall = realParaDolar(valorReal, cotacao); 

 // alert("O valor em real é: R$" + valorReal +
 	// ". O valor em dólar é: U$" + totall);

 function alertaHello(){
 	// alert("Olá pessoal");
 }
 //alertaHello();

 function paraCelsius(valorFarenheit){
 	return(5/9) * (valorFarenheit - 32) ;
 }
 var x = paraCelsius(77);
 // alert("A temperatura é "+ x +" graus celsius");

 function minhaFuncao(){
 	var c = 2; //variável local
 }

/*

                 OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca: "ford", modelo: "ka", ano:2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocada
dentro de uma propriedade.

*/

const carro = {
 	marca: "ford",
 	modelo: "ka", 
 	ano: 2015, 
 	placa: "ABC-1234",
 	buzina: function(){ alert('Biiiiiiiii') },
 	completo: function(){
 		return "A marca é " + this.marca +" e o modelo é: "+ this.modelo;
 	}
};

console.log(carro.completo());
/*console.log(carro["marca"]);
 ou console.log(carro.marca);*/
// carro.buzina();

/*

           EVENTOS

Eventos são ações disparadas pela interação dos usuários na página. 
É o correto manejo desses eventos que tornam as páginas interativas e
dinâmicas.

Existem muitos eventos. Veja os mais utilizados:
onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válido para input,
onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando um tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.

*/


function eventoClick(){
	//alert("Acionou um evento de click");
	document.body.style.backgroundColor = "yellow";
}
function eventoDblClick() {
	alert("Evento de click duplo");

}
function viraAzul(){
	let div = document.getElementById("teste");
	div.style.backgroundColor = "blue";
}
function viraVermelho() {
	let div = document.getElementById("teste");
	div.style.backgroundColor = "red";
}
// onmousemove
function adicionaTexto(){
 	let p = document.getElementById("texto");
 	p.append('O mouse moveu ');
 }

//onfocus
function limpaTexto() {
	document.getElementById("campo_texto").value ="";
}

//onchange
function mudou() {
	console.log('Mudou');
}

//onkeypress, onkeydown e onkeyup
function teclaPressionada() {
	let input = document.getElementById("campo_texto").value;
	console.log(input);
}

//onload

//onresize

/*

                    ARRAYS(MATRIZES)
Os arrays JS são usados para armazenar vários valores em 
uma única variável. Diferente dos objetos, que funcionam com
as propriedades ou "nomes" que você  dá para os itens dentro
dele, os arrays não possuem propriedades. O item dentro dele
é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, 
por ordem de posição dentro dele.

Ex: const lista = ["arroz","feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante

*/

var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

const lista = ["arroz", "feijão", "macarrão", "leite"];
/*
Outras formas de criar uma array:
const lista = [];
lista[0] = "arroz"; 
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "leite";

const lista = new Array("arroz", "feijão", "macarrão", "leite");
/-----------------------/
let h = lista[3]; alert(h);
lista[0] = "Café"; alert(lista[0]); console.log(lista);
*/


const person = ["Mateus" , " Barros", 17 , " estudante"]; //array
// alert(person.length); //quantos itens tem na array person
// alert(person[person.length -1]); //mostrar o último item da array
person.push(" Brasileiro"); /*adicionar mais um item a array */ person[person.length] = " Solteiro"; // outra forma de adicionar
console.log(person);
//alert(Array.isArray(person)); //Avisar se a variável é uma array


/*

					MÉTODOS PARA ARRAYS(MATRIZES)

*/
// person.pop(); //remove o último item da lista
// person.push("Qualquer coisa");
// person.shift(); //remove o primeiro[0] item da lista
// person.unshift("Marcoin"); // adiciona um item em primeiro[0] na lista
// delete person[0]; //outra forma de deletar(não recomendado)
// person.splice(1,0,"Item adicionado 1","Item adicionado 2"); //adicionando 2 itens no item 1 sem sobrescrever
const lista1 = ["Macarrão","Alface","Tomate","Arroz"];
const lista2 = ["Suco", "Refrigerante", "Carne"];
const lista3 = ["Salgadinho"];
const superLista = lista1.concat(lista2, lista3); //juntar matrizes

document.getElementById("texto7").innerHTML = person.join(" - "); //troca o separador entre os valores
document.getElementById("texto8").innerHTML = superLista.join(" - "); //troca o separador entre os valores

const jogadores = ["Biro Biro", "Ribamar", "Pélé", "Maradona", "Neymar", "Messi", "CR7", "Vampeta"];
// const craques = jogadores.slice(2);//adicionar itens de uma outra array a partir de uma posição
// const craques = jogadores.slice(2, 7);//adicionar itens de uma outra array a partir de uma posição até uma não incluída
 const jogOrdem = jogadores.sort(); //organiza em ordem alfabética crescente
// jogadores.reverse(); //organiza em ordem alfabética descrescente


const numeros =[40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);
function filtragem(value, index, array){
	return value > 20;
};
/* numeros.sort(function(a,b){
	return a - b;
}); //coloca os números na ordem numérica crescente
*/
/*
numeros.sort(function(a,b){
	return b - a;
}); //coloca os números na ordem numérica descrescente
*/
/*
function maiorNumero(array){
	return Math.max.apply(null, array);
};//pegar o maior número de uma array
function menorNumero(array){
	return Math.min.apply(null, array);
};//pegar o menor número de uma array 
document.getElementById("texto9").innerHTML = menorNumero(numeros);

*/
document.getElementById("texto9").innerHTML = maior20;

/*

					IF e ELSE

*/
var interruptor = "on";

if (interruptor == "on") {
	alert('A lâmpada está ligada.');
}else{
	alert('A lâmpada está desligada.');

};

var hora = new Date().getHours();
if(hora < 12){
	alert('Bom dia');
}else if (hora < 18){
	alert('Boa tarde');
}else{
	alert('Boa noite');

};

function verificar(){
	let nome = document.getElementById("nome").value;

	if (nome == "" || nome == null) {
		let parag = document.getElementById("texto10");
		parag.innerHTML = "O campo não pode ser vazio.";
		parag.style.color = "red";
	}else{
		let parag = document.getElementById("texto10");
		parag.innerHTML = "Parabéns. Tudo certo";
		parag.style.color = "green";
	}
};

/*

					SWITCH
É usado para realizar diferentes ações com base 
em diferentes condições no mesmo bloco de verificar. 
Caso a verificação não seja compatível não será executada
e o valor padrão será acionado.

*/
function verificaCor() {
	let cor = document.getElementById('cor').value;
	cor = cor.toLowerCase(); //deixa a entrada da cor(input) tudo minúsculo
// o switch é literal(===)
switch(cor){
	case "azul":
		//o que acontece
		document.body.style.backgroundColor = "blue";
		break; //se for esta condição, vai parar aqui
	case "vermelho":
		//o que acontece
		document.body.style.backgroundColor = "red";
		break;
	case "amarelo":
		//o que acontece
		document.body.style.backgroundColor = "yellow";
		break;
	default:
		//o que acontece
		document.getElementById("texto11").innerHTML 
		= "Nenhuma cor disponível para: " + cor;

			}
};

function diaDaSemana() {
	var dia = new Date().getDay();
	console.log(dia);
// o switch é literal(===)
switch(dia){
	case 0:		
		document.getElementById("texto12").innerHTML = "Hoje é Domingo";
		break; 

	case 1:		
		document.getElementById("texto12").innerHTML = "Hoje é Segunda";
		break;

	case 2:		
		document.getElementById("texto12").innerHTML = "Hoje é Terça";
		break;
	case 3:		
		document.getElementById("texto12").innerHTML = "Hoje é Quarta";
		break;
	case 4:		
		document.getElementById("texto12").innerHTML = "Hoje é Quinta";
		break;
	case 5:		
		document.getElementById("texto12").innerHTML = "Hoje é Sexta";
		break;
	case 6:		
		document.getElementById("texto12").innerHTML = "Hoje é Sabádo";
		break;
	default:
		document.getElementById("texto12").innerHTML = "Não sabe o dia.";
			}
};


/*

					LAÇO DE REPETIÇÃO FOR
Laçoes oferecem um jeito fácil 
e rápido de executar uma ação repetidas vezes.

*/
	
// for (let i = 0;  i < 101; i++){
// 	document.getElementById("texto13").innerHTML += i + ", ";
// };

var year = new Date().getFullYear(); //indicar o ano mais recente

for (let anos = year ; anos >= 1900; anos--) {
	document.getElementById("ano").innerHTML +="<option value='"+ anos +"'>"+ anos +"</option>";
};

const cars = ["Gol", "Fusca", "Brasília", "Del Ray", "Chevette"];
var tamanho = cars.length;

for (let m = 0; m < tamanho ; m++) {
	document.getElementById("texto14").innerHTML += cars[m] +  " - ";
}

/*

					EVENTOS DE TEMPO COM JAVASCRIPT
Os eventos de tempo permitem a execução do código em 
intervalos de tempo especificados. Esses intervalos de 
tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function, tempo em milissegundos)
-> Executa uma função, depois de esperar um número 
especificado de milissegundos.

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução 
da função corretamento

*/

// Daqui, está na página htmljsParte2.html

//setTimeout
function ativarContagem(){
	document.getElementById("tempo").innerHTML = "Começou a contar!";
	//ativa a função apenas uma vez quando der o tempo especificado
	tempo = setTimeout(function(){ 
	document.getElementById("tempo").innerHTML = "Executou o setTimeout!";
	 }, 5000); // 1 segundo = 1000 milisegundos

};
function pararContagem(){
	clearTimeout(tempo); //parar o tempo
	document.getElementById("tempo").innerHTML = "Parou a contagem!";

};

//setInterval
function ativarContagem2(){
	tempo2 = setInterval(function(){
		var cronometro = document.getElementById("tempo2").innerHTML;
		var somar = parseInt(cronometro) - 1;
		if(somar === 0){
			pararContagem2();
		document.getElementById("tempo2").innerHTML = "Tempo Esgotado.";
		}
		document.getElementById("tempo2").innerHTML = somar;

	}, 1000);
};

function pararContagem2(){
	clearInterval(tempo2);
};


/*

					CLASSES EM JAVASCRIPT
Em 2015 foi introduzido no JavaScript as Classes. As classes são
um conceito antigo em programção e várias linguagens utilizam 
elas. Mas no JS isso é relativamente novo, por isso mesmo 
programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para
construir os objetos, as Classes no JavaScript usam um método
chamado constructor() para fabricar os objetos.

*/

class Carro{
	constructor(va1, va2, va3){
		this.marca = va1;
		this.modelo = va2;
		this.ano = va3;
	}
	buzina(){
		return this.modelo + " buzinou: Biiiiiiiiiiiiiiii";
	}
};

const uno = new Carro("Fiat", "Uno",  2001);
const gol = new Carro("Volkswagem", "Gol", 2013);
console.log(uno);
console.log(gol.buzina());
gol.ano = 2014;
console.log(gol);

/* MANIPULAR DATAS EM JAVASCRIPT */

//Comando base para pegar a data
let data1 = new Date();
//console.log(data1);

//Pegar o ano atual com 4 digitos
let ano_ = data1.getFullYear();
// alert(ano_);

//Pegar o mês atual - de 0 até 11 sendo janeiro 0 e 11 dezembro
let mes = data1.getMonth();
// alert(mes);

//Mostar o mês no formato escrito
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro","Outubro", "Novembro", "Dezembro"]; 
let mesEscrito = mesesDoAno[data1.getMonth()];
// alert(mesEscrito);

//Pegar dia do mês - 1 até 31
let diaMes = data1.getDate();
// alert(diaMes);

//Pegar dia da semana - 0 até 6
let diaSemana = data1.getDay();
const  diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta","Sexta","Sábado"];
let diaSemanaEscrito = diasDaSemana[data1.getDay()];
console.log(diaSemanaEscrito);

//Pegar a hora - 0 até 23
let hora1 = data1.getHours();
// console.log(hora1);

//Pegar os minutos - 0 até 59
let minutos = data1.getMinutes();
// console.log(minutos);

//Pegar segundos - 0 até 59
let segundos = data1.getSeconds();
console.log(segundos);

//Pegar Milisegundos - 0 até 999
let milisegundos = data1.getMilliseconds();
// console.log(milisegundos);

//Pegar a data no padrão brasileiro - dia/mês/ano 
let dataBR = data1.toLocaleString('pt-BR', {dataStyle : 'short'});
console.log(dataBR);

//Pegar os valores separados e juntá-los
d1 = new Date();
diaMes1 = d1.getDate();
mes1 = d1.getMonth() + 1;
anoo = d1.getFullYear();

function addZero(t){
	return t < 10 ? '0'+t : ''+t;
};

let dataPadraoBR = addZero(diaMes1) + "/" + addZero(mes1) + "/" + anoo;
console.log(dataPadraoBR);

//Comparar datas - Maior ou Menor. EX: Vencimentos
var hoje = new Date();
var vencimento = new Date(2022, 11, 15);

if (hoje >vencimento) {
	console.log("Sua conta está vencida!");
}else{
	console.log("Ainda não venceu, tudo certo!");
};


//Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31)

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo /(24 * 60 * 60 * 1000));
	console.log(diferencaDias + " dias");

/*

				**	JSON  **

JSON significa JavaScript Object Notation que traduzido pro português fica algo como notação de objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formatp de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no JavaScript usamos dois métodos:

JSON.parse() -> Converte texto no padrão em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON
*/

const karro = {
	marca: "Fiat",
	modelo:"Uno",
	motor: ["1.6","1.4","1.0"]
};
// Converteu para texto JSON
let text = JSON.stringify(karro);
//Colocou o texto em HTML
document.getElementById('area').innerHTML= text;
// Convertemos texto em objeto 
let obj = JSON.parse(text); 
//Pegamos um valor deste objeto
console.log(obj.motor[2]);

function buscarCEP() {
	let inputt = document.getElementById('cep').value;

	const ajax = new XMLHttpRequest(); //requisição a um site sem precisar accesar o site em navegador
	ajax.open('GET', 'https://viacep.com.br/ws/'+ inputt +'/json/');
	ajax.send();
	ajax.onload = function () {
	//document.getElementById('texto_').innerHTML = this.responseText;
	
	// Transformei o texto em objeto
	let obj = JSON.parse(this.responseText);

	// Aqui peguei os valores que eu queria
	let logradouro = obj.logradouro;
	let cidade = obj.localidade;
	let estado = obj.uf;
	document.getElementById('texto_').innerHTML = "Logradouro: " + logradouro +"<br> Cidade: "+cidade+"<br>Estado: "+estado ;

			}

}



