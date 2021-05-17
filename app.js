
const formulario  = document.querySelector('#formulario');
const btnEnviar   = document.querySelector('#btnEnviar');
const btnCargando = document.querySelector('#btnCargando');
const toast       = document.querySelector('.toast');


formulario.addEventListener('submit', (e)=> {
  e.preventDefault();

  const datos = new FormData(formulario);

  console.log('campo Email', datos.get('emailCampo'))
  console.log('campo Password', datos.get('passCampo'))
  console.log('campo CheckBox', datos.get('checkCampo'))

  btnEnviar.classList.add("d-none")
  btnCargando.classList.remove('d-none')

  setTimeout(()=> {
   btnEnviar.classList.remove("d-none")
   btnCargando.classList.add('d-none')

   const toastEvent = new bootstrap.Toast(toast)
   toastEvent.show()

  }, 3000); 

  formulario.reset();//pour remettre a zero le formulaire  
  
  })