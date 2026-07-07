const txt = document.getElementById('texto')
const btn = document.getElementById('boton')
const img = document.getElementById('imagen')
const numdecubosattcch = document.getElementById('ncubos')

let cubs = 0
btn.addEventListener('click', function(){
    document.body.classList.toggle('modooscuro')
    txt.innerText = 'este texto tambien cambia de color XD'
})

img.addEventListener('click', () => {
	
	const displaydenmrs = document.getElementById('cubes')
	
	cubs = cubs + 100
	
	displaydenmrs.innerText = cubs
	
	if (cubs >= 1000){
		numdecubosattcch.innerHTML = '<span id="cubes">0</span> K cubos'
	}
})