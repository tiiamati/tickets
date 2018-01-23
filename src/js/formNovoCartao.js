
;(function(criaCartao){

	const form = document.querySelector('.formNovoCartao')
	const $campoConteudo = form.querySelector('.formNovoCartao-conteudo')

	form.addEventListener('submit', function(event){
		event.preventDefault()

		const conteudo = $campoConteudo.value.trim()
		
		
		if ( !conteudo ){

			const $msgErro = document.createElement('div')

			$msgErro.classList.add('formNovoCartao-msg')
			$msgErro.textContent = 'Sem conteudo'

			document.querySelector('.formNovoCartao-salvar').insertAdjacentElement('beforebegin', $msgErro)

			$msgErro.addEventListener('animationend', function(){
				$msgErro.remove()
			})

		} else {

			criaCartao({conteudo: conteudo })
		}

		$('.formNovoCartao-conteudo').val('')
	})

	$campoConteudo.addEventListener('change', function(event){

		const conteudo = $campoConteudo.value.trim()

		if ( conteudo ){
			$('.formNovoCartao-conteudo').css('height', '7em')
		} else {
			$('.formNovoCartao-conteudo').css('height', '')
		}

	})

	form.classList.remove('no-js')
})(criaCartao)
