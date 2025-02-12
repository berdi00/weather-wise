import { ref, watch } from 'vue';
import type { TLocation } from '../types/location';
import { fetchLocations } from '../services/getLocations';
import { useDebounce } from '@/composable/useDebounce';

const locations = ref<TLocation[]>();
const searchValue = ref('Ashgabat');
const location = ref<TLocation>({
	latitude: 37.9375,
	longitude: 58.475,
	country: '',
	id: 1,
	name: 'Ashgabat',
});

const errorSearch = ref('');
const loadingSearch = ref(false);

const debouncedSearch = useDebounce(async () => {
	loadingSearch.value = true;
	try {
		const data = await fetchLocations(searchValue.value);
		locations.value = data.results;
		errorSearch.value = '';
	} catch (err: any) {
		errorSearch.value = err.message;
	} finally {
		loadingSearch.value = false;
	}
}, 500);

watch(() => searchValue.value, debouncedSearch);

export { searchValue, errorSearch, loadingSearch, locations, location };
