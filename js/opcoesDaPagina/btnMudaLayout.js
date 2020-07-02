
const btn = document.querySelector('#btnMudaLayout') //E6

function mudaTexto(){
	if ( this.textContent == 'Blocos' ){
		this.textContent = 'Linhas'
	} else {
		this.textContent = 'Blocos'
	}
}

//btn.onclick = mudaTexto
btn.addEventListener('click', mudaTexto)

const mural = document.querySelector('.mural')

function mudaLayout(){
	mural.classList.toggle('mural--linha')

	/*if ( mural.classList.contains('mural--linha') ){
		mural.classList.remove('mural--linha')
	} else {
		mural.classList.add('mural--linha')
	}*/
}

btn.addEventListener('click', mudaLayout)

btn.classList.remove('no-js')
