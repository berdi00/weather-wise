import type { TLocation } from '@/types/location';
import type { TDailyRes, THourly, THourlyRes } from '@/types/weather';
const WEATHER_URL = import.meta.env.VITE_OPEN_METEO_URL;
export const getHourlyWeather = async (location: TLocation): Promise<THourlyRes> => {
	try {
		const response = await fetch(
			`${WEATHER_URL}/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code&timezone=auto`
		);
		if (!response.ok) {
			throw new Error('Weather data not found');
		}
		const data = await response.json();
		return data;
	} catch (error: any) {
		throw new Error(error.message || 'Failed to fetch weather data');
	}
};

export const getDailyWeather = async (location: TLocation): Promise<TDailyRes> => {
	try {
		const response = await fetch(
			`${WEATHER_URL}/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_mean,wind_speed_10m_max,uv_index_max&timezone=auto&forecast_days=7`
		);

		if (!response.ok) {
			throw new Error('Weather data not found');
		}
		const data = await response.json();
		return data;
	} catch (error: any) {
		throw new Error(error.message || 'Failed to fetch weather data');
	}
};
