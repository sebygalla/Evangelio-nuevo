const btn = document.getElementById('botón');
const modal = document.getElementById('modal');
const cerrar = document.getElementById('cerrar');

btn.addEventListener('click', () => {
  modal.classList.add('modal__activo') 
});

cerrar.addEventListener('click', () => {
  modal.classList.remove('modal__activo')

});




