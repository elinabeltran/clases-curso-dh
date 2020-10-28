
/* .map(function(elemento,indice,array){})
let esteArray = [ "mama", "papa", "papa"]

let nuevoArray = esteArray.map (function(elemento,indice,array){
    //return `El elemento actual es: ${elemento} y ocupa la posición de ${indice} de este array`
    return elemento.toUpperCase()
})
console.log(nuevoArray)



// .reduce (function(acumulador,elemento){},0)
let esteArray = [ 10, 20, 30];

//esteArray.reduce( funcion(){},valorInicial)
let resultado = esteArray.reduce ( function (acumulador,elemento){
    return acumulador + elemento

}, 0)

console.log (resultado)

// .filter(function(){})

let esteArray = [ 1, 3, 10, 20, 31,10];

let mayores = esteArray.filter ( function (elemento,indice,array){
    return (elemento>=10 & elemento%2==0) ; //condicion booleana

    })

    console.log(mayores)


//for (let laPropiedad in unObjeto)in para iterar un objeto

let unObjeto = {
    nombre:"Laia",
    apellido:"Organa"
}

for (let laPropiedad in unObjeto){
    console.log (`Mi ${laPropiedad} es ${unObjeto[laPropiedad]}`)
}


// For of

let listaDePeliculas= ["Kill Bill", "Pulp Fiction"]
for (let laPelicula of listaDePeliculas){
    console.log (laPelicula)
}


// Objeto Date

console.log (new Date())


// Destructuring desarmo array o deconstructo un objeto y puedo guardar en nuevas variables

let listaDePeliculas= ["Kill Bill", "Pulp Fiction", "Amelie"]
let pelicula1  = listaDePeliculas[0]
let pelicula2  = listaDePeliculas[2]
let pelicula3  = listaDePeliculas[1]



let listaDePeliculas= ["Kill Bill", "Pulp Fiction", "Amelie"]

let [pelicula1, ,pelicula2]= listaDePeliculas;

console.log(pelicula2)

let unObjeto = {
    nombre:"Laia",
    apellido:"Organa"
}

let {apellido: nombreNuevoApellido} = unObjeto;

console.log(nombreNuevoApellido)*/

// ... ignora y lee solo su contenido del array  como que extrae los elementos
/*let listaDePeliculas= ["Kill Bill", "Pulp Fiction", "Amelie"]
let lista2DePeliculas= ["Nemo", "Pets"]
let listaUnica = [...listaDePeliculas,...lista2DePeliculas]


let unObjeto = {
    genero:"Femenino",
    esLaUno:true
}


let ella = {
    nombre:"Laia",
    apellido:"Organa",
    ... unObjeto
}

console.log(ella)

*/

function sumar (...grupoDeNumeros){
    return grupoDeNumeros.reduce (function (acumulador,elemento){
        reuen acumulador+elemento
    },0)
}

console.log (sumar (2,5,6,7,5))