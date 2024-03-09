// var, let, const

let msg ='hola pepe!!!!';

const titulo = document.getElementById('tituloH1');
console.log(titulo);
console.log(titulo.innerText);
titulo.innerText = msg;

//function myMetodo(a,b,c){
//    /**...... */
//    return a+b+c;
//}
//myMetodo(2,3,4);

//const myMetodo = function(a,b,c){
//    return a+b+c;
//}
//myMetodo(2,3,4);

//const myMetodo = (a,b,c) => {
//    return a + b + c;
//}
//myMetodo(2,3,4);

document.getElementById('saludarBtn')
.addEventListener('click',()=> {
      const formSaludo = document.forms['formSaludo'];
      const nombre = formSaludo['nombre'].value;
      console.log(formSaludo);
      console.log(nombre);
      const tituloDos = document.getElementById('saludoH2');
      if (!nombre) {
        tituloDos.classList.remove('mostrarSaludo')
        alert('debe ingresar el nombre');
      } else {
        tituloDos.innerText = 'hola ' + nombre + '!!!!!!!!';
        tituloDos.classList.add('mostrarSaludo');
        tituloDos.style.color = '#ff0f80'
      }
});