import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid-pro';
// import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium';
import { DataGridPremium } from '@mui/x-data-grid-premium/DataGridPremium';
import React from 'react';
import {
  useCreateNoteMutation,
  useGetCaseNotesQuery,
} from '@office-automation/workflow-engine/data/data-inbox';
import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'usr_uid', headerName: 'ردیف', width: 90 },
  {
    field: 'app_pro_title',
    headerName: 'فرستنده',
    width: 150,
    editable: true,
  },
  {
    field: 'note_date',
    headerName: 'تاریخ',
    width: 150,
    editable: true,
  },
  {
    field: 'note_content',
    headerName: 'متن',
    width: 110,
    editable: true,
  },
];

export function WorkFlowEngineFeatureInboxForm() {
  const methods = useFormContext();
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const [createNote] = useCreateNoteMutation();

  const { data, isFetching } = useGetCaseNotesQuery({
    CaseId: methods.getValues('app_uid'),
  });

  const handleCreateNote = (value: any) => {
    value.target.value;
    methods.setValue('noteText', value.target.value);
  };

  const handleCreateRowForNote = () => {
    const payload = methods.getValues();
    createNote({
      payload: payload,
    }).then((value) => {
      console.log(value, 'valuevalueytytyqyyewqrqwer');
    });
  };

  return (
    <>
      <div className="flex items-end   ">
        <Button
          onClick={handleCreateRowForNote}
          variant={'contained'}
          className="h-[30px] w-[15px] "
        >
          تایید
        </Button>
        <textarea
          id="story"
          name="story"
          rows={5}
          cols={33}
          className="w-full border-2 border-black-600 "
          dir="rtl"
          onKeyUp={handleCreateNote}
        ></textarea>
      </div>
      <Box className="mt-2 flex-[1_1_0] h-[500px]  overflow-auto">
        <DataGridPremium
          rows={data ? JSON.parse(data) : []}
          style={{ direction: 'rtl', height: '500px' }}
          columns={columns}
          getRowId={(rows) => rows?.app_uid}
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

export default WorkFlowEngineFeatureInboxForm;
