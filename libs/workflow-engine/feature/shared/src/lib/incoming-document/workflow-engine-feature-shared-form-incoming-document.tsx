import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid-pro';
import { DataGridPremium } from '@mui/x-data-grid-premium/DataGridPremium';
import React, { useMemo } from 'react';
import { useGetUploadDocumentQuery } from '@office-automation/workflow-engine/data/data-inbox';

export function WorkFlowEngineFeatureSharedFormIncominDocument({
  id,
}: {
  id: number;
}) {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const { data, isFetching } = useGetUploadDocumentQuery({
    app_uid: id,
  });

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'app_doc_filename',
        headerName: 'نام فایل',
        width: 150,
        editable: false,
      },
      {
        field: 'app_doc_link',
        headerName: 'مشاهده',
        width: 150,
        editable: false,
      },
      {
        field: 'app_doc_type',
        headerName: 'تنوع',
        width: 70,
        editable: false,
      },
      {
        field: 'app_doc_version',
        headerName: 'ورژن',
        width: 50,
        editable: false,
      },
      {
        field: 'app_doc_create_user',
        headerName: 'ایجاد شده توسط',
        width: 150,
        editable: false,
      },
      {
        field: 'app_doc_create_date',
        headerName: 'تاریخ ایجاد',
        width: 110,
        editable: false,
        flex: 1,
      },
    ],
    []
  );

  return (
    <>
      <Box>
        <DataGridPremium
          rows={data ? JSON.parse(data) : []}
          style={{ direction: 'rtl', height: '500px' }}
          columns={columns}
          getRowId={(rows) => rows?.app_doc_uid}
          showToolbar
          pagination
          autoPageSize
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          paginationMode="client"
          // apiRef={gridApiRef}
          loading={isFetching}
          checkboxSelection
          disableRowSelectionOnClick
          initialState={{
            pinnedColumns: { left: ['actions'] },
          }}
        />
      </Box>
    </>
  );
}

export default WorkFlowEngineFeatureSharedFormIncominDocument;
