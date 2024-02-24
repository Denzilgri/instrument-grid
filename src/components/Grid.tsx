import React from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import useGrid from '.././hooks/useGrid';

// Grid compoent for displaying the instrument data in a tabular format
function Grid() {
	const { rowData, colDefs, defaultColDef, gridReadyHandler } = useGrid();

	return (<div
		className="ag-theme-balham-dark"
		style={{ width: '100%', height: '100%' }}
	>
		<AgGridReact
			rowData={rowData}
			columnDefs={colDefs}
			onGridReady={gridReadyHandler}
			defaultColDef={defaultColDef} />
	</div>
	);
}

export default Grid;
