// Resuelve las siguientes preguntas:

// #1) Crea una promesa que se resuelve en 4 segundos y devuelve un string de "éxito"
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("éxito");
  }, 4000)
});

// #2) Ejecute la promesa anterior y haga que console.log "éxito": 
promesa.then(console.log)
// o: 
promesa.then(resp => console.log(resp))

// #3) Lea sobre Promise.resolve () y Promise.reject (). Como puedes hacer
// la promesa anterior más corta con Promise.resolve () y el log de la consola "éxito"
const promesa = Promise.resolve(
  setTimeout(() => {
    console.log("éxito");
  }, 4000)
);

// #4) Atrapa este error y el registro de la consola 'Ooops, algo salió mal'
Promise.reject('failed')
  .catch(console.log('Ooops, algo salió mal'))

// #5) Use Promise.all para obtener todas estas personas de Star Wars (SWAPI) al mismo tiempo.
// Console.log la salida y asegúrese de que también tiene un bloque catch.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh arreglarlo!', err));

// #6) Cambie una de sus direcciones URL para hacerla incorrecta y no cumplir con la promesa
// ¿Lo maneja tu bloque catch?