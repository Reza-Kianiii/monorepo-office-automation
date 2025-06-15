import { GridColDef } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';

export function useColumnState({ row }: { row: any }) {
  const [newColumns, setNewColumns] = useState<GridColDef<any>[]>([]);

  useEffect(() => {
    if (row[0]?.Variables && Object.keys(row[0]?.Variables).length) {
      console.log('teererererererere');
      const newColumns = Object.keys(row[0]?.Variables).map((item) => {
        return {
          field: `${item}`,
          headerName: item,
          valueGetter: (value, row) => row?.Variables[item],
        };
      });
      setNewColumns(newColumns);
    } else {
      setNewColumns([]);
    }
  }, [row[0]?.Variables ? Object.keys(row[0]?.Variables)?.length : 0]);

  return {
    newColumns,
  };
}
