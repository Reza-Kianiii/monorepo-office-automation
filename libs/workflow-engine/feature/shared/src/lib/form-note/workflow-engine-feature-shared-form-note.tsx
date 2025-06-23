import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid-pro';
import { DataGridPremium } from '@mui/x-data-grid-premium/DataGridPremium';
import React, { useMemo } from 'react';
import {
  useGetOutPutDocumentQuery,
  useGetUploadDocumentQuery,
} from '@office-automation/workflow-engine/data/data-inbox';
import { useFormContext } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import {
  useCreateNoteMutation,
  useGetCaseNotesQuery,
} from '@office-automation/workflow-engine/data/data-notes';

export function WorkFlowEngineFeatureSharedFormNote() {
  const methods = useFormContext();
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const [createNote] = useCreateNoteMutation();

  const { data, isFetching } = useGetCaseNotesQuery({
    CaseId: methods.getValues('app_uid'),
  });

  const columns: GridColDef[] = [
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

  const handleCreateNote = (value: any) => {
    value.target.value;
    methods.setValue('noteText', value.target.value);
  };

  const handleCreateRowForNote = () => {
    const payload = methods.getValues() as {
      noteText: string;
      app_uid: string;
    };
    createNote({
      payload: payload,
    }).then((value) => {
      console.log(value, 'valuevaluevalueyyyy');
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
      <Box>
        <DataGridPremium
          rows={data ?? []}
          style={{ direction: 'rtl', height: '500px' }}
          columns={columns}
          getRowId={(rows) => rows?.id}
          showToolbar
          pagination
          autoPageSize
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          paginationMode="client"
          // apiRef={gridApiRef}
          loading={isFetching}
          initialState={{
            pinnedColumns: { left: ['actions'] },
          }}
        />
      </Box>
    </>
  );
}

export default WorkFlowEngineFeatureSharedFormNote;
