export type THourly = {
	time: string[];
	weather_code: number[];
	temperature_2m: number[];
	relative_humidity_2m: number[];
	precipitation: number[];
};

export type THourlyFormatted = {
	time: string;
	weatherCode: number;
	temperature: number;
	humidity: number;
	precipitation: number;
};

export type TDailyFormatted = {
	maxTemp: number;
	minTemp: number;
	date: string;
	hourly: THourlyFormatted[];
	weatherCode: number;
	precipitation: number;
	uvIndex: number;
	windSpeed: number;
};

export type TDaily = {
	temperature_2m_max: number[];
	temperature_2m_min: number[];
	time: number[];
	weather_code: number[];
	precipitation_probability_mean: number[];
	uv_index_max: number[];
	wind_speed_10m_max: number[];
};

export type TDailyRes = {
	daily: TDaily;
};

export type THourlyRes = {
	hourly: THourly;
};
