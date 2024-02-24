import { renderHook } from '@testing-library/react';
import useGrid from '../useGrid';

describe('Hooks module', () => {
	test('returns data and defs for ag grid', () => {
		const { result } = renderHook(() => useGrid());
		const { colDefs, defaultColDef, rowData } = result.current;
		expect(colDefs.length).toEqual(3);
		expect(rowData.length).toBeGreaterThan(0);
		expect(Object.keys(defaultColDef).length).toEqual(2);
	});
});