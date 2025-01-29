import { ref, watch } from 'vue';
import { location } from './location';
import { getDailyWeather, getHourlyWeather } from '@/services/getWeatherInfo';
import type { TDailyFormatted } from '@/types/weather';
import { formatData } from '@/utils/formatData';

const formattedDaily = ref<TDailyFormatted[]>([]);

const errorWeather = ref('');
const loadingWeather = ref(false);

const currentIndex = ref(0);
const currentHour = ref(new Date().getHours());

watch(
	() => location.value,
	async () => {
		loadingWeather.value = true;
		try {
			if (location.value) {
				const [resHourly, resDaily] = await Promise.all([
					getHourlyWeather(location.value),
					getDailyWeather(location.value),
				]);
				formattedDaily.value = formatData(resDaily.daily, resHourly.hourly, currentHour.value);
				errorWeather.value = '';
			}
		} catch (err: any) {
			errorWeather.value = err.message;
		} finally {
			loadingWeather.value = false;
		}
	},
	{
		immediate: true,
	}
);

export { currentIndex, formattedDaily, loadingWeather, errorWeather };
