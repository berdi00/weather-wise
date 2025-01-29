import type { TLocationsRes } from '../types/location';

const URL = import.meta.env.VITE_GEOCODING_URL;

export const fetchLocations = async (query: string): Promise<TLocationsRes> => {
	try {
		const response = await fetch(`${URL}/search?name=${encodeURIComponent(query)}&count=10`);

		if (!response.ok) {
			throw new Error('Location not found');
		}

		const data: TLocationsRes = (await response.json()) as TLocationsRes;
		if (!data.results || data.results.length === 0) {
			throw new Error('Location not found');
		}

		return data;
	} catch (err: any) {
		throw new Error(err.message || 'Failed to search location');
	}
};
