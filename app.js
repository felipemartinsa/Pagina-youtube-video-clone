//let sizeScreen = window.innerWidth
//alert(sizeScreen)


//Dispositivo de verificação de necessidade de botão de rolagem lateral no lado direito ao abrir o site
function verificaRolagem(){
	let lista = document.getElementById('lista-sugeridos')
	let botao = document.getElementById('degrade-direito').classList
	let botaoEsquerdo = document.getElementById('degrade-esquerdo').classList


	if (lista.scrollWidth > lista.clientWidth){
		botao.add('aparecer')
	} else{
		if(botao.contains('aparecer')){
			botao.remove('aparecer')
			botaoEsquerdo.remove('aparecer')
		}
	}
}

addEventListener('resize',verificaRolagem)

function fechaMenuLateral() {
	let MenuLateral = document.getElementById('hb-e-logo')

	if (MenuLateral.classList.contains('active')){
		MenuLateral.classList.remove('active')
	}
}


function abreMenuLateral() {
	let MenuLateral = document.getElementById('hb-e-logo')

	MenuLateral.classList.toggle('active')
}

function searchModeIn() {
	let nav = document.getElementById('nav')
	let botao = document.getElementById('btn-search')

	if (!(nav.classList.contains('searchMode'))){
		nav.classList.add('searchMode')
	} 

	botao.type = 'submit'
	botao.classList = 'btn-search'
}

function searchModeOut() {
	let nav = document.getElementById('nav')
	let botao = document.getElementById('btn-search')
	nav.classList.remove('searchMode')

	botao.type = 'button'
	botao.classList = 'btn-v2'
}

function rolaDireita() {
	let ul = document.getElementById('lista-sugeridos')
	let botaoEsquerdo = document.getElementById('degrade-esquerdo')

	ul.scrollLeft += 50 

	botaoEsquerdo.classList.add('aparecer')
}

function rolaEsquerda() {
	let ul = document.getElementById('lista-sugeridos')
	let botaoEsquerdo = document.getElementById('degrade-esquerdo')

	ul.scrollLeft -= 50 

	if (ul.scrollLeft <= 0) {
		botaoEsquerdo.classList.remove('aparecer')
	}
}





