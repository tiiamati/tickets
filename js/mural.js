
;(function($){

	let contador = document.querySelectorAll('.cartao').length

	const listaCartoes = []

	function criaCartao(cartao){

		listaCartoes.push({conteudo: cartao.conteudo, cor: cartao.cor})

		contador++

		const $cartao = $(`
			<article id="cartao_${contador}" style="background-color:${cartao.cor};" class="cartao">
				<div class="opcoesDoCartao">
					<button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
						<svg><use xlink:href="#iconeRemover"></use></svg>
					</button>

					<input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" ${ cartao.cor ? '' : 'checked'}>
					<label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
						Padrão
					</label>

					<input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
					<label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
						Importante
					</label>

					<input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
					<label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
						Tarefa
					</label>

					<input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
					<label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
						Inspiração
					</label>
				</div>
				<p class="cartao-conteudo" contenteditable tabindex="0">${cartao.conteudo}</p>
			</article>
			`)

		// const $tpl = document.createElement('tpl')

		// $tpl.innerHTML = `
		// <article id="cartao_${contador}" class="cartao">
		// 	<div class="opcoesDoCartao">
		// 		<button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
		// 			<svg><use xlink:href="#iconeRemover"></use></svg>
		// 		</button>

		// 		<input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
		// 		<label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
		// 			Padrão
		// 		</label>

		// 		<input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
		// 		<label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
		// 			Importante
		// 		</label>

		// 		<input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
		// 		<label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
		// 			Tarefa
		// 		</label>

		// 		<input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
		// 		<label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
		// 			Inspiração
		// 		</label>
		// 	</div>
		// 	<p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
		// </article>`

		// const $cartao = $tpl.querySelector('.cartao')

		// document.querySelector('.cartao').insertAdjacentElement('beforebegin', $cartao)

		$('.mural').prepend($cartao)

		$cartao.on('focusin', function(){
			$cartao.addClass('cartao--focado')
		})

		$cartao.on('focusout', function(){
			$cartao.removeClass('cartao--focado')
		})

		$cartao.on('change', '.opcoesDoCartao-radioTipo', function(event){

			const $elementoAtual = $(event.target)
			//const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

			// //delegate
			// if ( isRadioTipo ){
			// 	const novaCor = $elementoAtual.value
			// 	$cartao.css('background', novaCor)
			// }

			const novaCor = $elementoAtual.val()
			$cartao.css('background', novaCor)
		})
		

		$cartao.on('keypress', '.opcoesDoCartao-tipo', function(event){
			
			const $elementoAtual = $(event.target)
			// const isLabel = $elementoAtual.hasClass('opcoesDoCartao-tipo')

			// if ( isLabel ){
			// 	$elementoAtual.click()
			// }

			if ( event.key === 'Enter' || event.key === ' '){
				$elementoAtual.click()
			}
		})

		$cartao.on('click', '.opcoesDoCartao-remove', function(event){

			// const $elementoAtual = event.target
			// const isRemove = $elementoAtual.hasClass('opcoesDoCartao-remove')

			// if ( isRemove ){
			// 	$cartao.addClass('cartao--some')

			// 	$cartao.on('transitionend', function(){
			// 		$cartao.remove()
			// 	})
			// }

			$cartao.addClass('cartao--some')

			$cartao.on('transitionend', function(){
				$cartao.remove()
			})
		})

		$('.formNovoCartao-conteudo').css('height', '')

	}

	window.criaCartao = criaCartao
	window.listaCartoes = listaCartoes

	$.ajax({
			url: "https://ceep.herokuapp.com/cartoes/carregar/",
			method:	"GET",
			data:{usuario: "leticia"},
			dataType: "jsonp",
			success: function(resp){
				const datas = resp.cartoes
				datas.forEach(data => criaCartao(data)) 
			}
	})
})(jQuery)

