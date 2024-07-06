
# Weather App

This weather app fetches and displays current weather conditions for a specified city using the OpenWeather API. The app provides dynamic weather updates and enhances the user experience with background images corresponding to the current weather conditions.

## Features

- **Weather Data Display**: Fetches and displays the current temperature, weather condition, humidity, and wind speed.
- **Dynamic Background**: Changes the background image based on the current weather condition.
- **Weather Icon**: Displays an icon representing the current weather condition, which is clickable and links to more information about the weather.
- **Show on Map**: Provides a link to display the geographical location of the specified city on Google Maps.

## Project Structure

├── index.html

├── styles.css

├── scripts.js

└── images

    ├── clear.jpg
    ├── clouds.jpg
    ├── drizzle.jpg
    ├── mist.jpg
    ├── rain.jpg
    ├── snow.jpg
    └── thunderstorm.jpg



## Setup and Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

2. **Obtain API Keys**

OpenWeather API Key: Sign up at OpenWeather and get your API key.

Google Places API Key: Follow the instructions at Google Cloud Console to get your API key. 
Ensure that both the "Google Maps JavaScript API" and "Places API" are enabled.

3. **Update API Keys in scripts.js**

Replace the placeholders with your actual API keys:

  ```sh
  const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your OpenWeather API key
  
  // Include this script in your HTML
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places"></script>

  ```

4. **Run the App**

Open index.html in your web browser to run the app.

## Usage

1. **Enter City Name**: Start typing the city name in the input field. A dropdown list of city suggestions will appear.
2. **Get Weather**: Click the "Get Weather" button to fetch and display the current weather conditions for the specified city.
3. **View Weather Details**: The weather details, including temperature, weather condition, humidity, and wind speed, will be displayed. The background image will change based on the weather condition.
4. **Show on Map**: Click the "📍 Show on Map" link to view the geographical location of the specified city on Google Maps.
5. **Weather Icon**: Click on the weather icon to get more information about the weather condition on Google.

## Contact

For any questions or feedback, please contact devub8@gmail.com.
