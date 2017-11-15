// window.addEventListener('load', iniciar);
// function iniciar(event) {
//   alert('Hola, ya me levante');
// }

// 1er Paso, si necesito crear mis variables del Dom, tiene que ser dentro
window.addEventListener('load', function() {
  // alert('Hola, ya me levante');
  var title = document.getElementsByTagName('h1')[0];
  var div = document.getElementsByTagName('div')[0];
  title.addEventListener('mouseover', function() {
    title.classList.add('textColor');
  });
  title.addEventListener('mouseout', function() {
    title.classList.remove('textColor');
  });
  div.addEventListener('click', function() {
    div.classList.toggle('big');
  });
});
