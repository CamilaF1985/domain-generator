// Definir listas de pronombres, adjetivos y sustantivos
let pronombres = ['tu', 'nuestro', 'mi'];
let adjetivos = ['gran', 'primer', 'mejor'];
let sustantivos = ['dominio', 'sitio', 'empresa'];

// Función para generar todas las combinaciones posibles de nombres de dominio
function generarCombinaciones() {
  let combinaciones = [];

// Bucles para iterar a través de los pronombres, adjetivos y sustantivos
  for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
      for (let sustantivo of sustantivos) {
        let dominio = `${pronombre}${adjetivo}${sustantivo}.com`;
        combinaciones.push(dominio);
      }
    }
  }

// Devolver la lista de combinaciones de nombres de dominio
  return combinaciones;
}

// Llamar a la función para generar combinaciones y almacenar el resultado
let dominios = generarCombinaciones();
console.log(dominios); // Imprimir las combinaciones de nombres de dominio en la consola



