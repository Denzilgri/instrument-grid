import { useMemo, useCallback } from 'react';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { fetchGridData } from '../services'
import { createColumnDefinitions } from '../utils/helpers';
import { gridColumnOrder } from '../utils/constants';

const useGrid = () => {
	// fetch data
	const rowData = useMemo(() => fetchGridData(), []);
	// get column definitions
	const colDefs = useMemo<ColDef[]>(() => createColumnDefinitions(gridColumnOrder), []);
	// default column rules during init
	const defaultColDef = useMemo<ColDef>(() => {
		return {
			resizable: true,
			sortable: true
		};
	}, []);
  // handler when the grid is rendered
	const gridReadyHandler = useCallback((event: GridReadyEvent) => {
		event.api.sizeColumnsToFit();
	}, []);

	return {
		rowData,
		colDefs,
		defaultColDef,
		gridReadyHandler
	};
};

export default useGrid;