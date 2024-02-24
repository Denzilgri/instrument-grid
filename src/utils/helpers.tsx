import { colDefMap } from './constants';

// returns a list of ag grid ColDefs
export const createColumnDefinitions = (coldefList: string[]) => coldefList.map(col => colDefMap[col]);