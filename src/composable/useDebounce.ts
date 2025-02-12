export function useDebounce(fn: () => void, delay: number) {
	let timer: ReturnType<typeof setTimeout> | null = null;

	return () => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(fn, delay);
	};
}
