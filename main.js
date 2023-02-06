
const $cityInput = document.getElementById('search-input')
const $form = document.getElementById('form')
const $cardContainer = document.querySelector('#container-cards')
const $waitMsg = document.querySelector('.p-add__city')
const $buttonClose = document.querySelector('#close')

//Guardamos el array de las ciudades
let citiesSaves = JSON.parse(localStorage.getItem('cities')) || []

//Guardamos en el localstorage lo que tengo en mi array de objetos
const saveToLocalStorage = (citiesSaves) => {

    localStorage.setItem('cities', JSON.stringify(citiesSaves))

}




//Renderizar mi HTML
const renderItems = (data) => {
    

    return `
    <div id="cardWeatherJS" data-id="${data.id}">
    <img src="images/x-regular-24.png" alt="close" class="close" data-id="${data.id}">
        <div id="containerLeftJS">
        
            <span id="info-tittle">${data.name}, ${data.sys.country}</span>
            <p id="info-subtittle">${data.weather[0].main}</p>
            <div id="info-temp">
                <span id="current-temperature">${convertTemperature(data.main.temp)}°</span>
                <span id="sensation">${convertTemperature(data.main.feels_like)}° ST</span>
            </div>
        </div>
        
        <img src="images/nubecard.png" alt="" id="weather-img">
        
        <div id="containerRightJS">
            <div id="clima-min-max">
                <span id="clima-max"><img src="images/uparrow.png" alt="">Max: ${convertTemperature(data.main.temp_max)}°</span>
                <span id="clima-min"><img src="images/downarrow.png" alt="">Min: ${convertTemperature(data.main.temp_min)}°</span>
            </div>
            <div id="div-humedad">
                <span id="humedad">${data.main.humidity}% Humedad</span>
            </div>
        </div>
    </div>
    
    `
    }
    
const renderTotal = (cities) => {
        
    if(cities.length >= 1){
        $cardContainer.innerHTML = cities.map(item => renderItems(item)).join('')
        $waitMsg.classList.add('hidden') //quito el msj de ingrese ciudad.
        return
    }

    $waitMsg.classList.remove('hidden')
        
}

const searchCity = async (e) => {

    e.preventDefault()
    const valueCityInput = $cityInput.value.trim()

    if(valueCityInput == ''){
        alert('Por favor enviá algo')
        return
    }
    //Le paso como parametro el value del input para hacer el fetch
    const fetchedCity = await requestCity(valueCityInput) //cuando llamemos a una función asincrona por ejemplo como acá, ponerle el await, para que JS no siga su curso 
    
    if(!showErrorCity(valueCityInput, fetchedCity)){
        return
    }

    //Guardo en mi array el nuevo fetch del clima
    citiesSaves = [fetchedCity, ...citiesSaves]
    //Lo guardo en mi localstorage al submitear, sino mi citiesSaves no va a traer nada...
    saveToLocalStorage(citiesSaves)
    //Renderizo el fetchedCity
    renderTotal(citiesSaves)
    //reseteo mi form
    $form.reset()

}

const deleteCard = (e) => {
    let idClose = e.target.dataset.id

    if(e.target.classList.contains('close')){ //CONTAINS CON S
        
        e.target.parentElement.classList.add('hidden')
        
        let currentCitys = citiesSaves.filter(item => item.id != idClose)

        citiesSaves = currentCitys
        renderTotal(citiesSaves)
        saveToLocalStorage(citiesSaves)

        
    }
}

const init = () => {
    renderTotal(citiesSaves)
    $cardContainer.addEventListener('click', deleteCard)
    $form.addEventListener('submit', searchCity)

}

init()