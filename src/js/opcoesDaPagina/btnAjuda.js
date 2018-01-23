;(function(criaCartao){

	const $btnAjuda = document.querySelector('#btnAjuda')

	// $btnAjuda.addEventListner('click', function(){

	// })

	$btnAjuda.addEventListener('click', () => {

		// const ajudas = [
		// 					{conteudo: 'ajuda 1', cor: 'pink'},
		// 					{conteudo: 'ajuda 2', cor: 'white'},
		// 					{conteudo: 'ajuda 3', cor: 'lime'},
		// 					{conteudo: 'ajuda 4', cor: 'grey'},
		// 				]

		const xhr = new XMLHttpRequest()

		xhr.open('GET','http://ceep.herokuapp.com/cartoes/instrucoes')
		xhr.send()

		// handler, callback
		xhr.addEventListener('load', () => {

			const obj = xhr.response
			const ajudas = JSON.parse(obj).instrucoes

			ajudas.reverse().forEach(ajuda => criaCartao(ajuda))
		})

		// ajudas.reverse().forEach(ajuda => criaCartao(ajuda.msg, ajuda.cor))

		
	})

	$btnAjuda.classList.remove('no-js')

})(criaCartao)