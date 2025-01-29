# Weather App

## Overview

The Weather Wise is a user-friendly application designed to provide accurate and detailed weather forecasts. With features such as location selection, hourly forecasts, and additional weather metrics, users can easily stay informed about current and upcoming weather conditions.

---

## Features

### 1. Location Selection

- Easily select your desired location to view weather forecasts for any area.

### 2. Hourly Weather Forecast (Next 24 Hours)

- Get weather updates for the next 24 hours, including temperature, precipitation, and more.

### 3. Daily Weather Forecast

- View weather information for the entire week.

### 4. Day Selection for Detailed Hourly Weather

- Select any day from the daily forecast to trigger and view the corresponding hourly weather details.

### 5. Additional Weather Information

Stay informed with comprehensive weather metrics:

- **Precipitation Percentage:** Know the likelihood of rain or snow.
- **Wind Speed (km/h):** Monitor wind conditions.
- **UV Index:** Keep track of UV exposure levels for safety.

---

## Usage Instructions

1. **Select Location:** Use the location selection feature to choose the desired place for weather updates.
2. **Check Hourly Forecast:** View detailed weather information for the next 24 hours.
3. **View Daily Forecast:** Explore weather predictions for the coming days.
4. **Trigger Hourly Weather by Day Selection:** Tap on a specific day in the daily forecast to see detailed hourly weather information.
5. **Monitor Additional Info:** Stay updated with precipitation, wind speed, and UV index metrics.

---

## Technologies Used

- Vue.js, (Composition Api)
- Open-Meteo - is an open-source weather API, for more info check out [Open Meteo](https://open-meteo.com/)

---

## Environment Variables

To run the project locally, create a `.env.local` file in the root directory and add the following environment variables:

```env.local
VITE_GEOCODING_URL=https://geocoding-api.open-meteo.com/v1
VITE_OPEN_METEO_URL=https://api.open-meteo.com/v1
```

---

## Installation

```bash
# Clone the repository
git clone https://github.com/berdi00/weather-wise

# Navigate to the project directory
cd weather-wise

# Install dependencies
pnpm install

# Run the dev server
pnpm dev

```
