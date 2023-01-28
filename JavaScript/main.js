let juan = {
    estatura: 180,
    nacionalidad: 'chilena',
    peso: 90,
    edad: 40,
    genero: 'masculino',
    direccion: {
        calle: 'seminario',
        numero: 50,
        comuna: 'santiago',
        region: 'mertropolitana',
        coordenadas: {
            latitud: 55.6,
            longitud: 40.678,
        }

    }

};

console.log(juan.nacionalidad);
console.log(typeof juan)
console.log(juan)
console.log(typeof juan.peso)


//EJERCICIO//
let persona = {
    nombre: 'matias',
    edad: 30,
    ocupacion: 'ingeniero',
}

const cambiarDatos = (propiedad, valor) => {
    persona[propiedad]= valor;

};
console.log(persona)
cambiarDatos('ocupacion', 'Desarrollador');
console.log(persona)
cambiarDatos('nombre', 'raul')
console.log(persona)

let atributos = Object.keys(persona);
console.log(atributos);
for (atributo of atributos) {
    console.log(persona[atributo])

}


//PARTE 2 DESESTRUCTURACION DE OBJETOS//
/*
let nombre = persona.nombre;
let edad = persona.edad; 
let ocupacion = persona.ocupacion;
*/
let { nombre, edad, ocupacion} = persona;
console.log(ocupacion)

//Desestructuracion en Arreglos//
let nacionalidades = ['chilena', 'argentina', 'venezolana', 'peruana']
let [n1, n2, n3, n4] = nacionalidades
console.log(n1)



