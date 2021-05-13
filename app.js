
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e)=> {
  e.preventDefault();

  const datos = new FormData(formulario);

  console.log('campo Email', datos.get('emailCampo'))
  console.log('campo Password', datos.get('passCampo'))
  console.log('campo CheckBox', datos.get('checkCampo'))

  formulario.reset();
  
  })