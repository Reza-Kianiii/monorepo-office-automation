import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridSlotsComponentsProps } from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type FooterStatus = 'connected' | 'disconnected';

declare module '@mui/x-data-grid' {
  interface FooterPropsOverrides {
    status: FooterStatus;
  }
}

export function DashboardFeatureGridComponent() {
  const [status, setStatus] = React.useState<FooterStatus>('connected');
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });
  return (
    <Box>
      <Box>
        <DataGrid
          {...data}
          slotProps={{
            footer: { status },
          }}
        />
      </Box>
    </Box>
  );
}

export default DashboardFeatureGridComponent;
