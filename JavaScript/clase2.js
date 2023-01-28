//CLASS//

class libro {
constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}

imprimirDataLibro() {
    return(
        `El Titulo del Libro es ${this.titulo} y el autor es ${this.autor}. `);

}

}
//Al hacer un NEW estamos instanciando la clase//
let libro1 = new libro('El Quijote', 'Miguel de Cervantes');

//console.log(libro1);
let data_libro1 = libro1.imprimirDataLibro()
console.log(data_libro1)
let libro2= new libro('Papelucho', 'Marcela Serrano' )
let data_libro2 = libro2.imprimirDataLibro()
console.log(data_libro2)
console.log(libro2)

