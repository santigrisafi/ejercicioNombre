let darNombre = prompt("Ingrese su nombre de usuario");

let cantidadLetras = darNombre.trim().length;

alert("Cantidad de caracteres ingresados son " + cantidadLetras);

let darEdad = prompt("Ingrese su edad");
let edad = parseInt(darEdad);

let resultado = edad + cantidadLetras;

alert(
  "Cantidad de caracteres ingresados y la edad ingresada es de " + resultado
);

if (resultado <= 15) {
  alert(cantidadLetras, alert("La cuenta total es menor a 15"));
} else {
  if (resultado >= 15) {
    alert(cantidadLetras, alert("La cuenta total es mayor a 15"));
  }
};
