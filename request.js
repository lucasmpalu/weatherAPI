const apiKey = 'f4061b0cd2374ce45e190a90c073aec8'



const requestCity = async (city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'

    const queryParams = `?q=${city}&appid=${apiKey}`

    const response = await fetch(baseURL+queryParams) 

    const data = await response.json()

    return data
    
}


