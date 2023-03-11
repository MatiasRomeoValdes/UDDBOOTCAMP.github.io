let nombre_ciudad = document.querySelector ('#ciudad');
let button = document.querySelector ('#accion');

button.addEventListener('click', () => {
    if (nombre_ciudad.value == ''){
        alert('Ingrese nombre de la ciudad');
        nombre_ciudad.ciudad.focus ();

    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${nombre_ciudad.value}&appid=616629f9acdc3b22b8b09553e632e5da`;
/*fetch(url)
.then(response => Response.json())
.then(data => console.log(data))
obtenerDataClima(url)
   */

}
    

})

const obtenerDataClima = async(url) => {
    const Response = await fetch (url);
    const data = await responde.json();
    return data;
    console.log(data)
    


}

