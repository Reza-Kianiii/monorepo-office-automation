import React from 'react';
import Box from '@mui/material/Box';

import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import {
  useCreateNoteMutation,
  useGetCaseNotesQuery,
} from '@office-automation/workflow-engine/data/data-notes';
import { DataGridPremium, GridColDef } from '@mui/x-data-grid-premium';

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

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: 'app_pro_title',
        headerName: 'فرستنده',
        width: 150,
        editable: false,
      },
      {
        field: 'note_date',
        headerName: 'تاریخ',
        width: 150,
        editable: false,
      },
      {
        field: 'note_content',
        headerName: 'متن',
        width: 110,
        editable: false,
        flex: 1,
      },
    ],
    []
  );

  const handleCreateRowForNote = () => {
    const payload = methods.getValues() as {
      noteText: string;
      app_uid: string;
    };

    createNote({
      payload: payload,
    }).then(() => {
      methods.setValue('noteText', '');
    });
  };

  return (
    <>
      <div>
        <textarea
          {...methods.register('noteText')}
          id="story"
          rows={5}
          cols={33}
          className="w-full border-2 border-black-600 "
          dir="rtl"
        ></textarea>
        <Button
          onClick={handleCreateRowForNote}
          variant={'contained'}
          className="h-[30px] w-[15px] "
        >
          تایید
        </Button>
      </div>
      <div>
        <Box className="mt-2  h-[500px] ">
          <DataGridPremium
            rows={data ?? []}
            columns={columns}
            getRowId={(rows) => rows?.id}
            showToolbar
            pagination
            autoPageSize
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="client"
            loading={isFetching}
            initialState={{
              pinnedColumns: { left: ['actions'] },
            }}
          />
        </Box>
      </div>
    </>
  );
}

export default WorkFlowEngineFeatureSharedFormNote;
