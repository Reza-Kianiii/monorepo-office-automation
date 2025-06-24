import { GridColDef } from '@mui/x-data-grid-pro';
import { useEffect, useState } from 'react';

export function useColumnState({
  row,
  listDictionaryWorkFlow,
}: {
  row: any;
  listDictionaryWorkFlow: any;
}) {
  const [newColumns, setNewColumns] = useState<GridColDef[]>([]);

  useEffect(() => {
    if (row[0]?.Variables && Object.keys(row[0]?.Variables).length) {
      const newCols: GridColDef[] = Object.keys(row[0]?.Variables).map(
        (item) => {
          return {
            field: `${item}`,
            headerName: listDictionaryWorkFlow[item]?.VariableLable,
            valueGetter: (value, row) => row?.Variables[item],
          };
        }
      );
      setNewColumns(newCols);
    } else {
      setNewColumns([]);
    }
  }, [row[0]?.Variables ? Object.keys(row[0]?.Variables)?.length : 0]);

  return {
    newColumns,
  };
}
