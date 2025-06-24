import Box from '@mui/material/Box';
import React, { useRef } from 'react';
import { SharedUiWidgetHeader } from '@office-automation/shared/ui/widget';
import {
  DataGridPremium,
  useGridApiRef,
  GridColDef,
  GridRowParams,
  GridActionsCellItem,
} from '@mui/x-data-grid-premium';
import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import {
  WorkFlowEngineFeatureSharedDialogIncomingDocument,
  WorkFlowEngineFeatureSharedDialogNote,
  WorkFlowEngineFeatureSharedDialogOutPutDocument,
  WorkFlowEngineFeatureSharedDialogProcessInformation,
  WorkFlowEngineFeatureSharedDialogProcessMaker,
  WorkFlowEngineFeatureSharedDialogSummary,
} from '@office-automation/workflow-engine/feature/shared';
import { useGetDraftsQuery } from '@office-automation/workflow-engine/data/data-drafts';
import { useGetUnassignedQuery } from '@office-automation/workflow-engine/data/data-unassigned';

export function WorkFlowEngineFeatureUnassigned() {
  const [operation, setOperation] = React.useState<
    | 'PROSECCMAKER'
    | 'null'
    | 'NOTE'
    | 'INCOMINGDOCUMENTS'
    | 'OUTPUTDOCUMENT'
    | 'SUMMARY'
    | 'PROCESSINFORMATION'
  >('null');

  const selectedWorkflowEngineUnassigned = useRef<any>(null);

  const gridApiRef = useGridApiRef();

  const { data: unassigned, isLoading: isLoadingUnassigned } =
    useGetUnassignedQuery();

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const columns: GridColDef[] = [
    { field: 'app_title', headerName: 'شماره کار/عنوان', width: 90 },
    {
      field: 'app_pro_title',
      headerName: 'فرایند',
      width: 150,
      editable: false,
    },
    {
      field: 'app_tas_title',
      headerName: 'وظیفه',
      width: 150,
      editable: false,
    },
    {
      field: 'usr_Info',
      headerName: 'ارسال توسط',
      width: 110,
      editable: false,
    },
    {
      field: 'app_update_date',
      headerName: 'مهلت اجرا',

      sortable: false,
      width: 160,
    },

    {
      field: 'del_task_due_date',
      headerName: 'اخرین تعییر',
      type: 'number',
      width: 110,
      editable: false,
    },

    {
      field: 'asdfa',
      headerName: 'الویت',
      width: 110,
      editable: false,
      flex: 1,
    },

    {
      field: 'actions',
      type: 'actions',
      width: 140,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          icon={<ScreenShareSharpIcon />}
          label="نمایش"
          onClick={() => setOperation('PROSECCMAKER')}
        />,
        <GridActionsCellItem
          icon={<EventNoteIcon />}
          label="یادداشت ها"
          onClick={() => setOperation('NOTE')}
        />,

        <GridActionsCellItem
          // icon={<FileCopyIcon />}
          label="اسناد ورودی"
          onClick={() => setOperation('INCOMINGDOCUMENTS')}
          showInMenu
        />,
        <GridActionsCellItem
          // icon={<FileCopyIcon />}
          label="اسناد خروجی"
          onClick={() => setOperation('OUTPUTDOCUMENT')}
          showInMenu
        />,
        <GridActionsCellItem
          // icon={<FileCopyIcon />}
          label="خلاصه"
          onClick={() => setOperation('SUMMARY')}
          showInMenu
        />,
        <GridActionsCellItem
          // icon={<FileCopyIcon />}
          label="اطلاعات فرایند"
          onClick={() => setOperation('PROCESSINFORMATION')}
          showInMenu
        />,
      ],
    },
  ];

  return (
    <div className=" flex flex-1 flex-col  h-full ">
      <SharedUiWidgetHeader title={'اختصاص نیافته ها'} />

      <div className="flex flex-1 flex-col h-full">
        <Box className="mt-2 flex-[1_1_0] overflow-auto">
          <DataGridPremium
            rows={unassigned ? JSON.parse(unassigned) : []}
            columns={columns}
            getRowId={(rows) => rows.app_title}
            showToolbar
            pagination
            autoPageSize
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="client"
            apiRef={gridApiRef}
            loading={isLoadingUnassigned}
            slotProps={{
              row: {
                onFocus: (event: any) => {
                  const rowId = event.currentTarget.getAttribute('data-id');
                  const row = gridApiRef.current?.getRow(rowId ?? 0);
                  selectedWorkflowEngineUnassigned.current = row;
                },
              },
            }}
            checkboxSelection
            disableRowSelectionOnClick
            initialState={{
              pinnedColumns: { left: ['actions'] },
            }}
            // initialState={initialState}
          />
        </Box>
      </div>
      {operation === 'PROSECCMAKER' && (
        <WorkFlowEngineFeatureSharedDialogProcessMaker
          data={selectedWorkflowEngineUnassigned.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'NOTE' && (
        <WorkFlowEngineFeatureSharedDialogNote
          data={selectedWorkflowEngineUnassigned.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'INCOMINGDOCUMENTS' && (
        <WorkFlowEngineFeatureSharedDialogIncomingDocument
          id={selectedWorkflowEngineUnassigned.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'OUTPUTDOCUMENT' && (
        <WorkFlowEngineFeatureSharedDialogOutPutDocument
          id={selectedWorkflowEngineUnassigned.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'SUMMARY' && (
        <WorkFlowEngineFeatureSharedDialogSummary
          data={selectedWorkflowEngineUnassigned.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'PROCESSINFORMATION' && (
        <WorkFlowEngineFeatureSharedDialogProcessInformation
          data={selectedWorkflowEngineUnassigned.current}
          onclose={() => setOperation('null')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureUnassigned;
