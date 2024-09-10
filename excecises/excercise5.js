/*
Ejercicio 5: Clasificación de edades
Crea una función llamada clasificarEdad(edad) que reciba una edad como argumento y retorne:
"Niño" si la edad es menor a 12,
"Adolescente" si la edad es entre 12 y 17,
"Adulto" si la edad es entre 18 y 64,
"Adulto mayor" si la edad es 65 o mayor.
*/
function clasificarEdad(edad) {
    // TODO: Resolver
if (edad >= 65) {
    return "Adulto mayor";
}
if (18 <= edad && edad < 65) {
    return "Adulto";
}
if (12 < edad && edad <= 17) {
    return "Adolescente";
}
if (0 <= edad && edad < 12) {
    return "Niño";
}
}

console.log("-----------------------------------")
console.log("EJERCICIO 5")
console.log("-----------------------------------")
console.log(clasificarEdad(10));  // "Niño"
console.log(clasificarEdad(16));  // "Adolescente"
console.log(clasificarEdad(30));  // "Adulto"
console.log(clasificarEdad(70));  // "Adulto mayor"