let pronombres = ['tu', 'nuestro', 'mi'];
let adjetivos = ['gran', 'primer', 'mejor'];
let sustantivos = ['dominio', 'sitio', 'empresa'];

function generarCombinaciones() {
  let combinaciones = pronombres.flatMap(pronombre =>
    adjetivos.flatMap(adjetivo =>
      sustantivos.map(sustantivo => `${pronombre}${adjetivo}${sustantivo}.com`)
    )
  );

  return combinaciones;
}

let dominios = generarCombinaciones();
console.log(dominios);
