import oct1 from '$lib/oct1.json';
import oct2 from '$lib/oct2.json';

export default {
	1: oct1,
	2: oct2
};

export const randomize = () => Math.floor(Math.random() * 2 + 1);
