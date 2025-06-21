import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid-pro';
import { DataGridPremium } from '@mui/x-data-grid-premium/DataGridPremium';
import React, { useMemo } from 'react';
import {
  useCreateNoteMutation,
  useGetCaseNotesQuery,
  useGetOutPutDocumentQuery,
  useGetUploadDocumentQuery,
} from '@office-automation/workflow-engine/data/data-inbox';
import { useFormContext } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { continuousColorLegendClasses } from '@mui/x-charts';

export function WorkFlowEngineFeatureInboxNotesForm() {
  const methods = useFormContext();
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const [createNote] = useCreateNoteMutation();

  const { data, isFetching } = useGetCaseNotesQuery({
    CaseId: methods.getValues('app_uid'),
  });

  console.log(data, 'dataqqqqqqqqqqwerwer');

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

export default WorkFlowEngineFeatureInboxNotesForm;

export function WorkFlowEngineFeatureInboxIncomingDocumentsForm({
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

  if (data) {
    console.log(JSON.parse(data), 'yuyuyquwerqwerqwer');
  }

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
        width: 110,
        editable: false,
      },
      {
        field: 'app_doc_version',
        headerName: 'ورژن',
        width: 110,
        editable: false,
      },
      {
        field: 'app_doc_create_user',
        headerName: 'ایجاد شده توسط',
        width: 110,
        editable: false,
      },
      {
        field: 'app_doc_create_date',
        headerName: 'تاریخ ایجاد',
        width: 110,
        editable: false,
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

export function WorkFlowEngineFeatureInboxOutPutDocumentForm({
  id,
}: {
  id: number;
}) {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const { data, isFetching } = useGetOutPutDocumentQuery({
    app_uid: id,
  });

  if (data) {
    console.log(JSON.parse(data), 'ttttttttttt');
  }

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
        width: 110,
        editable: false,
      },
      {
        field: 'app_doc_version',
        headerName: 'ورژن',
        width: 110,
        editable: false,
      },
      {
        field: 'app_doc_create_user',
        headerName: 'ایجاد شده توسط',
        width: 110,
        editable: false,
      },
      {
        field: 'app_doc_create_date',
        headerName: 'تاریخ ایجاد',
        width: 110,
        editable: false,
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

export function WorkFlowEngineFeatureInboxSummaryForm({
  inbox,
}: {
  inbox: any;
}) {
  const slotProsp = useMemo(
    () => ({
      input: {
        readOnly: true,
      },
    }),
    []
  );

  return (
    <>
      <Box component={'form'} noValidate autoComplete="off">
        <div>
          <div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="عنوان کار"
                defaultValue={inbox?.app_pro_title}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="شناسه کار"
                defaultValue={inbox?.app_title}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="شماره"
                defaultValue={inbox?.app_number}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="وضعیت"
                defaultValue={inbox?.app_status}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="شناسه"
                defaultValue={inbox?.app_uid}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="ایحاد کننده"
                defaultValue={inbox?.usr_username}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="تاریخ ایجاد"
                defaultValue={inbox?.update_date}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="تاریخ اخرین ویرایش"
                defaultValue={inbox?.update_date}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="توضیحات"
                defaultValue={''}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="مرحله"
                defaultValue={inbox?.app_tas_title}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="کاربر تایید کننده"
                defaultValue={inbox?.app_currentuser}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="تاریخ اختصاص کار"
                defaultValue={inbox?.del_delegate_date}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="تاریخ انجام کار"
                defaultValue={inbox?.del_init_date}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="تاریخ سر رسید کار"
                defaultValue={inbox?.del_queue_duration}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
