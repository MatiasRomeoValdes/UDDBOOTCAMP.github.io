let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto: '',
    descripcion: '',
    rut:''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const puestoInput = document.querySelector('#puesto');
const descripcionInput = document.querySelector('#descripcion');
const rutInput = document.querySelector('#rut');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === '' || puestoInput.value === '' || descripcionInput.value === '' || rutInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarEmpleado();
        editando = false;
    } else {
        
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.puesto = puestoInput.value;
        objEmpleado.descripcion = descripcionInput.value;
        objEmpleado.rut = rutInput.value;

        agregarEmpleado();
        GuardarBd();
    }
}

function agregarEmpleado() {

    listaEmpleados.push({...objEmpleado});
    

    mostrarEmpleados();
    GuardarBd();
    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.puesto = '';
    objEmpleado.descripcion = '';
    objEmpleado.rut = '';
}


const GuardarBd =() =>{

    localStorage.setItem('empleados', JSON.stringify(listaEmpleados))
}

const PintarDB =() =>{


    listaEmpleados = JSON.parse(localStorage.getItem('empleados'))

    console.log(listaEmpleados);

    if (listaEmpleados === null){

        listaEmpleados = [];

    }else{ 
        listaEmpleados.forEach(element =>{
            console.log(element);
            formulario.innerHTML += `${element.nombre} - ${element.puesto} - ${element.descripcion} - ${element.rut}` ;     
        })
    }

    }




document.addEventListener('DOMContentLoaded', PintarDB)



function mostrarEmpleados() {
    limpiarHTML();

    const divEmpleados = document.querySelector('.div-empleados');
    
    listaEmpleados.forEach(empleado => {
        const {id, nombre, puesto, descripcion, rut} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} - ${puesto} - ${descripcion} - ${rut}` ;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });
}

function cargarEmpleado(empleado) {
    const {id, nombre, puesto, descripcion, rut} = empleado;

    nombreInput.value = nombre;
    puestoInput.value = puesto;
    descripcionInput.value = descripcion;
    rutInput.value = rut;

    objEmpleado.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarEmpleado() {

    objEmpleado.nombre = nombreInput.value;
    objEmpleado.puesto = puestoInput.value;
    objEmpleado.descripcion = descripcionInput.value;
    objEmpleado.rut = rut.value;

    listaEmpleados.map(empleado => {

        if(empleado.id === objEmpleado.id) {
            empleado.id = objEmpleado.id;
            empleado.nombre = objEmpleado.nombre;
            empleado.puesto = objEmpleado.puesto;
            empleado.descripcion = objEmpleado.descripcion;
            empleado.rut = objEmpleado.rut;

        }

    });

    limpiarHTML();
    mostrarEmpleados();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarEmpleado(id) {

    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarEmpleados();
}

function limpiarHTML() {
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}

//asdasdsadsa