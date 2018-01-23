// ;(function(){
// 	const cartoes = document.querySelectorAll('.cartao')

// 	//delegate
// 	for ( let cartao of cartoes){

// 		cartao.addEventListener('focusin', function(){
// 			cartao.classList.add('cartao--focado')
// 		})

// 		cartao.addEventListener('focusout', function(){
// 			cartao.classList.remove('cartao--focado')
// 		})

// 		cartao.addEventListener('change', function(event){

// 			const $elementoAtual = event.target
// 			const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

// 			//delegate
// 			if ( isRadioTipo ){
// 				const novaCor = $elementoAtual.value
// 				cartao.style.backgroundColor = novaCor
// 			}
// 		})

// 		cartao.addEventListener('keypress', function(event){
			
// 			const $elementoAtual = event.target
// 			const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-tipo')

// 			if ( isLabel ){
// 				$elementoAtual.click()
// 			}
// 		})

// 		cartao.addEventListener('click', function(event){

// 			const $elementoAtual = event.target
// 			const isRemove = $elementoAtual.classList.contains('opcoesDoCartao-remove')

// 			if ( isRemove ){
// 				cartao.classList.add('cartao--some')

// 				cartao.addEventListener('transitionend', function(){
// 					cartao.remove()
// 				})
// 			}
// 		})
// 	}
// })()

// === 'quando o valor e o tipo são iguais, 0 === 0 '
// == 'quando o valor é igual, 0 == '0' '