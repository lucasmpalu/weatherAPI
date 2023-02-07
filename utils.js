const showErrorCity = (valueInput, fetched) => {
    if(!fetched.id) {
        alert('La ciudad ingresada no existe o no tenemos su pronostico')
        $form.reset()
        return false
    } else if(citiesSaves.some(item => fetched.id == item.id)){
        alert('La ciudad ingresada ya existe')
        $form.reset()
        return false
    } else if(citiesSaves.length >= 3){
        alert('Usted puede agregar hasta tres cartas de clima, elimine alguna')
        $form.reset()
        return false
    } else {
        return true
    }
}

//Función para convertir mis grados
const convertTemperature = (kelvin) => {
    
    const celsius = Math.round(kelvin - 273.15) //math round me devuelve la cifra redondeada al entero mas cercano
    return celsius
}

const renderBgColor = (currentTemp) => {
    if (currentTemp <= 18) {
        return 'background-blue' 
    } else if (currentTemp > 18 && currentTemp < 27) {
        return 'background-green'
    } else if (currentTemp >= 27) {
        return 'background-red'
    }
}

const iconWeather = (info) => {
   

    switch (info) {
        case 'Clear':
            return 'images/simbols/clear.png'
            break;

        case 'Clouds':
            return 'images/simbols/clouds.png'
            break;
        
        case 'Mist':
            return 'images/simbols/mist.png'
            break

        case 'Smoke':
            return 'images/simbols/smoke.png'
            break
        
        case 'Rain':
            return 'images/simbols/rain.png'
            break        
        case 'Snow':
            return 'images/simbols/snow.png'
            break    
        case 'Thunderstorm':
            return 'images/simbols/thunderstorm.png'
            break       
    
        default:
            break;
    }
    
}
