import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../Grid';

describe('Components module', () => {
	test('renders the Grid component', () => {
		const wrapper  = render(<Grid />);
		const res = wrapper.findAllByRole('presentation');
		expect(res).toBeTruthy();
	});
});