const apiKey = '8aff3a1793b8b61fcb272059669d1c78'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const errorMsg = document.querySelector('.error')
const weatherDiv = document.querySelector('.weather')

const icons = {
  Clouds: 'assets/clouds.webp',
  Clear: 'assets/clear.webp',
  Rain: 'assets/rain.webp',
  Drizzle: 'assets/drizzle.webp',
  Mist: 'assets/mist.webp',
  Haze: 'assets/haze.webp',
}
Object.values(icons).forEach((src) => {
  const img = new Image()
  img.src = src
})
async function checkWeather(city) {
  if (!city) return alert('Please enter a city name')

  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`)
    if (!response.ok) throw new Error('City not found')

    const data = await response.json()
    const {
      name,
      main: { temp, humidity },
      wind: { speed },
      weather,
    } = data
    console.log(data)
    errorMsg.style.display = 'none'
    weatherDiv.style.display = 'block'

    document.querySelector('.city').textContent = name
    document.querySelector('.temp').textContent = `${Math.round(temp)}°c`
    document.querySelector('.humidity').textContent = `${humidity}%`
    document.querySelector('.wind').textContent = `${speed} km/h`
    weatherIcon.src = icons[weather[0].main] || 'assets/default.png'
  } catch (error) {
    errorMsg.style.display = 'block'
    weatherDiv.style.display = 'none'
  }
}

searchBtn.addEventListener('click', () => checkWeather(searchBox.value))
