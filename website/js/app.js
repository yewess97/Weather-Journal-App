// Create a new date instance dynamically with JS
let date = new Date();

// The getMonth function is an array so that the value of first month is 0, so we added 1
let currentDate = date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear();

// Personal API Key for OpenWeatherMap API
let baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=a26f7a5a795ae84b827cf13e5a2073c5';

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', showAppData);

/* Function called by event listener */
function showAppData() {

    // Get user's inputs
    const zipCode = document.querySelector('#zip').value;
    const feeling = document.querySelector('#feelings').value;

    // An error occurred when the user inputs wrong US zip code
    const zipCodeError = document.querySelector('#zipCodeError');

    getWeatherData(baseUrl, zipCode, apiKey)

        // Post function to return data to the server
        .then((data) => {
            postData('/addAppData', {
                city: data.name,
                temp: data.main.temp,
                date: currentDate,
                content: feeling
            });
        })

        // Making the zipCodeError as none if the zip code is right, and update the user interface with the new data from the server
        .then(() => {
            zipCodeError.style.display = 'none';
            updateUI();
        })

        // Appropriately handle the error
        .catch((error) => {
            console.log('Error', error)
            zipCodeError.style.display = 'block';
            zipCodeError.textContent = 'Please enter a valid US zip code';
        })
}

/* Function to GET Web API Data (Async GET) */
const getWeatherData = async (baseUrl, apiKey, zipCode) => {
    const response = await fetch(baseUrl + apiKey + zipCode)
    try {
        // Transform into JSON
        const gottenData = await response.json();
        console.log(gottenData);
        return gottenData;
    } catch (error) {
        // Appropriately handle the error
        console.log('Error', error);
    }
}

/* Function to POST data (Async POST) */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    try {
        const postedData = await response.json();
        console.log(postedData);
        return postedData;
    } catch (error) {
        // Appropriately handle the error
        console.log('Error', error);
    }
}

/* Function to GET Project Data (Update the interface) */
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        // Transform into JSON
        const allData = await request.json();

        // Some variables to shorten some codes
        let body = document.body;
        let appHeadline = document.querySelector('.app-headline');
        const tempKelvin = `${allData.temp.toFixed(0)}&degK`;
        const tempFahrenheit = `${(9/5 * (allData.temp - 273) + 32).toFixed(0)}&degF`;
        const tempCelsius = `${allData.temp.toFixed(0) - 273}&degC`;

        // The data that appears to the user when click on generate button
        document.querySelector('#city').innerHTML = `<h5>City:</h5><p>${allData.city}</p>`;
        document.querySelector('#temp').innerHTML = '<h5>Temperature:</h5><p>' + tempKelvin + ' / ' + tempFahrenheit + ' / ' + tempCelsius + '</p>';
        document.querySelector('#date').innerHTML = `<h5>Date:</h5><p>${allData.date}</p>`;
        document.querySelector('#content').innerHTML = `<h5 class="feeling">My Feeling:</h5><p>${allData.content}</p>`;

        // Conditions to change the background and app headline styles according to the temperature
        if (allData.temp <= 293) {
            body.classList.remove('spring-body', 'summer-body');
            body.classList.add('winter-body');
            appHeadline.classList.remove('app-spring-headline');
            appHeadline.classList.add('app-winter-headline');
        } else if (allData.temp > 293 && allData.temp <= 305) {
            body.classList.remove('winter-body', 'summer-body');
            body.classList.add('spring-body');
            appHeadline.classList.remove('app-winter-headline');
            appHeadline.classList.add('app-spring-headline');
        } else {
            body.classList.remove('winter-body', 'spring-body');
            body.classList.add('summer-body');
            appHeadline.classList.remove('app-winter-headline', 'app-spring-headline');
        }

        // Making the feeling content as empty to write something else new
        document.querySelector('#feelings').value = '';
    } catch (error) {
        // Appropriately handle the error
        console.log('Error', error);
    }
}