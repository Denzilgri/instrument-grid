import { CellClassParams, ColDef } from "ag-grid-community";

export const gridColumnOrder = ['assetClass', 'price', 'ticker'];

export enum ASSET_CLASS {
	COMMODITIES = 'Commodities',
	EQUITIES = 'Equities',
	CREDIT = 'Credit',
}

// map for sorting values for assetClass
const assetSortMap: { [key: string]: number } = {
	'Commodities': 1,
	'Equities': 2,
	'Credit': 3
};

const stringStyle = {
	fontSize: 11,
	textAlign: 'left'
};

const numberStyle = {
	...stringStyle,
	textAlign: 'right'
};

export const numberClassFormatter = (params: CellClassParams | {value: number | any}) => {
	const val = params.value;
	if (isNaN(val) || val === undefined) {
		return '';
	} else if (val > 0) {
		return 'positive-interest'
	} else if (val < 0) {
		return 'negative-interest';
	}
	return 'no-interest';
};

export const assetClassFormatter = (params: CellClassParams | {data: {[key: string]:string}}) => {
	const val = params.data.assetClass;
	if (val === ASSET_CLASS.COMMODITIES) {
		return 'commodities-code';
	} else if (val === ASSET_CLASS.EQUITIES) {
		return 'equities-code';
	} else if (val === ASSET_CLASS.CREDIT) {
		return 'credit-code';
	}
	return '';
};

export const colDefMap: { [key: string]: ColDef } = {
	ticker: {
		headerName: 'Ticker',
		field: 'ticker',
		sort: 'asc',
		cellStyle: stringStyle,
		cellClass: assetClassFormatter
	},
	price: {
		headerName: 'Price',
		field: 'price',
		sort: 'desc',
		cellStyle: numberStyle,
		cellClass: numberClassFormatter,
		headerClass: 'number-header'
	},
	assetClass: {
		headerName: 'Asset Class',
		field: 'assetClass',
		sort: 'asc',
		cellStyle: stringStyle,
		comparator: (first: string, second: string) => {
			return assetSortMap[first] - assetSortMap[second];
		},
		cellClass: assetClassFormatter
	}
};