// Listas de pronombres, adjetivos y sustantivos
let pronombres = ['tu', 'nuestro', 'mi'];
let adjetivos = ['gran', 'primer', 'mejor'];
let sustantivos = ['dominio', 'sitio', 'empresa'];

// Función para generar todas las combinaciones posibles de nombres de dominio
function generarCombinaciones() {
    // Inicializar un array para almacenar las combinaciones
    let combinaciones = pronombres.flatMap(pronombre =>
        adjetivos.flatMap(adjetivo =>
            sustantivos.flatMap(sustantivo => `${pronombre}${adjetivo}${sustantivo}.com`)
        )
    );

    // Devolver la lista de combinaciones de nombres de dominio
    return combinaciones;
}

// Llamar a la función para generar combinaciones y almacenar el resultado en 'dominios'
let dominios = generarCombinaciones();
console.log(dominios);// Imprimir las combinaciones de nombres de dominio en la consola
