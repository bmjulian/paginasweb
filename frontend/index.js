var colores = ['rojo', 'azul', 'verde'];
console.log(colores);
colores.push('negro', 'blanco');
console.log(colores);
//interaccion con html 
var opciones = '';
var tabla = '';
for (var i=0; i< colores.length;i++){
    opciones += '<option values"' + i + '">' +colores[i]
    tabla += '<tr><td>' + (i+1) + '</tr></td>' +colores[i]+}
document.querySelector('#combo1').innerHTML = opciones;
document.querySelector('#body').innerHTML = tabla;