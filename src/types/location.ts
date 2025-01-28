export type TLocation = {
	id: number;
	name: string;
	latitude: number;
	longitude: number;
	country: string;
};

export type TLocationsRes = {
	results: TLocation[];
};
