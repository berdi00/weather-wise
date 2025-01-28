import type { TDaily, THourly } from '@/types/weather';

export function formatData(data: TDaily, hourlyData: THourly, currentHour: number) {
	const dailyData = data.time.map((date, ind) => {
		// const startIndex = currentHour.value;
		// const endIndex = startIndex + 23; // Get next 23 hours

		let start = 24;
		let end = 24 * (ind + 1);

		if (ind === 0) {
			start = currentHour;
			end = start + 24;
		}

		return {
			date: new Date(date).toLocaleDateString(undefined, {
				weekday: 'short',
				month: 'short',
				day: 'numeric',
			}),
			maxTemp: data.temperature_2m_max[ind],
			minTemp: data.temperature_2m_min[ind],
			weatherCode: data.weather_code[ind],
			precipitation: data.precipitation_probability_mean[ind],
			uvIndex: data.uv_index_max[ind],
			windSpeed: data.wind_speed_10m_max[ind],
			hourly: hourlyData.time.slice(start, end).map((time, index) => ({
				time: new Date(time).toLocaleTimeString('en-US', {
					hour: 'numeric',
					hour12: true,
				}),
				temperature: hourlyData.temperature_2m[start + index],
				weatherCode: hourlyData.weather_code[start + index],
				humidity: hourlyData.relative_humidity_2m[start + index],
				precipitation: hourlyData.precipitation[start + index],
			})),
		};
	});
	return dailyData;
}
