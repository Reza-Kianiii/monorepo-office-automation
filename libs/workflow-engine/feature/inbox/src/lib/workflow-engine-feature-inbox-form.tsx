import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid-pro';
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium';
import React from 'react';
import { useGetCaseNotesQuery } from '@office-automation/workflow-engine/data/data-inbox';

export function WorkFlowEngineFeatureInboxForm() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const columns: GridColDef[] = [
    { field: 'app_title', headerName: 'ردیف', width: 90 },
    {
      field: 'app_pro_title',
      headerName: 'فرستنده',
      width: 150,
      editable: true,
    },
    {
      field: 'app_tas_title',
      headerName: 'تاریخ',
      width: 150,
      editable: true,
    },
    {
      field: 'usr_Info',
      headerName: 'متن',
      width: 110,
      editable: true,
    },
  ];

  const { data } = useGetCaseNotesQuery();

  console.log(data, 'datadatadatadatadata');

  return (
    <div>
      <Box className="mt-2 flex-[1_1_0] overflow-auto ">
        <DataGridPremium
          rows={[]}
          style={{ direction: 'rtl' }}
          columns={columns}
          getRowId={(rows) => rows.app_title}
          showToolbar
          pagination
          autoPageSize
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          paginationMode="client"
          // apiRef={gridApiRef}
          // loading={true}
          slotProps={
            {
              // row: {
              //   onFocus: (event: any) => {
              //     const rowId = event.currentTarget.getAttribute('data-id');
              //     const row = gridApiRef.current?.getRow(rowId ?? 0);
              //     selectedWorkflowEngineInbox.current = row;
              //   },
              // },
            }
          }
          checkboxSelection
          disableRowSelectionOnClick
          initialState={{
            pinnedColumns: { left: ['actions'] },
          }}
          // initialState={initialState}
        />
      </Box>
    </div>
  );
}

export default WorkFlowEngineFeatureInboxForm;
