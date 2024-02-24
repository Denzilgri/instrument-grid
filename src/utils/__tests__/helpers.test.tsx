import { createColumnDefinitions } from '../helpers';
import { gridColumnOrder } from '../constants';

describe('Utils helper methods module', () => {
	test('returns instrument data', () => {
		const result = createColumnDefinitions(gridColumnOrder);
		expect(result.length).toEqual(3);
	});
});