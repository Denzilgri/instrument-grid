import { assetClassFormatter, ASSET_CLASS, numberClassFormatter } from '../constants';

describe('Utils constants module', () => {
	test('returns cell class for string value cells', () => {
        const params: {data: {[key: string]:string}} = {
            data: {
                assetClass: ASSET_CLASS.COMMODITIES
            }
        };
		let result = assetClassFormatter(params);
        expect(result).toEqual('commodities-code');
        
        params.data.assetClass = ASSET_CLASS.EQUITIES;
		result = assetClassFormatter(params);
        expect(result).toEqual('equities-code');
        
        params.data.assetClass = ASSET_CLASS.CREDIT;
		result = assetClassFormatter(params);
        expect(result).toEqual('credit-code');
        
        params.data.assetClass = 'asd';
		result = assetClassFormatter(params);
		expect(result).toEqual('');
	});

    test('returns class for number cells', () => {
		const params: {value: number | any} = {
            value: 0
        };
		let result = numberClassFormatter(params);
        expect(result).toEqual('no-interest');
        
        params.value = 2;
		result = numberClassFormatter(params);
        expect(result).toEqual('positive-interest');
        
        params.value = -1;
		result = numberClassFormatter(params);
        expect(result).toEqual('negative-interest');
        
        params.value = 'asd';
		result = numberClassFormatter(params);
		expect(result).toEqual('');
	});
});