const showErrorCity = (valueInput, fetched) => {
    if(!fetched.id) {
        alert('La ciudad ingresada no existe o no tenemos su pronostico')
        return false
    } else if(citiesSaves.some(item => fetched.id == item.id)){
        alert('La ciudad ingresada ya existe')
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