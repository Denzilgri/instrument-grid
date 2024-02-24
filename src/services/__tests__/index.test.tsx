import { fetchGridData } from '../index';

describe('Services module', () => {
	test('returns instrument data', () => {
		const result = fetchGridData();
		expect(result.length).toBeGreaterThan(0);
	});
});