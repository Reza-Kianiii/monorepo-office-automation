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
import { useGetDataInboxQuery } from '@office-automation/workflow-engine/data/data-inbox';
import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useColumnState } from '@office-automation/shared/util/core-hooks';
import {
  WorkFlowEngineFeatureSharedDialogIncomingDocument,
  WorkFlowEngineFeatureSharedDialogNote,
  WorkFlowEngineFeatureSharedDialogOutPutDocument,
  WorkFlowEngineFeatureSharedDialogProcessInformation,
  WorkFlowEngineFeatureSharedDialogProcessMaker,
  WorkFlowEngineFeatureSharedDialogSummary,
} from '@office-automation/workflow-engine/feature/shared';

export function WorkFlowEngineFeatureInbox() {
  const [operation, setOperation] = React.useState<
    | 'PROSECCMAKER'
    | 'null'
    | 'NOTE'
    | 'INCOMINGDOCUMENTS'
    | 'OUTPUTDOCUMENT'
    | 'SUMMARY'
    | 'PROCESSINFORMATION'
  >('null');

  const selectedWorkflowEngineInbox = useRef<any>(null);

  const gridApiRef = useGridApiRef();

  type ProcessVarsMap = {
    [keyId: string]: string[];
  };

  const selectedVariableItemWorkFlow = useRef<ProcessVarsMap>({});
  const dictionaryOfListItemsWorkFlowEngine = useRef({});

  const {
    data: inbox,
    isLoading: inboxIsLoading,
    isFetching: inboxIsFetching,
  } = useGetDataInboxQuery();

  console.log(inbox, 'inboxinboxinbox');

  const rows = useRef<any[]>([]);

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const { newColumns } = useColumnState({
    row: rows.current,
    listDictionaryWorkFlow: dictionaryOfListItemsWorkFlowEngine.current,
  });

  const columns: GridColDef[] = [
    { field: 'app_title', headerName: 'شماره کار', width: 90 },
    {
      field: 'app_pro_title',
      headerName: 'فرایند',
      width: 150,
      editable: false,
    },
    {
      field: 'app_tas_title',
      headerName: 'وظیفه',
      width: 190,
      editable: false,
    },
    {
      field: 'usr_Info',
      headerName: 'ارسال کننده',
      width: 110,
      editable: false,
    },
    {
      field: 'app_update_date',
      headerName: 'تاریخ',

      sortable: false,
      width: 160,
    },
    ...newColumns,
    {
      field: 'del_task_due_date',
      headerName: 'مهلت انجام کار',

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
      <SharedUiWidgetHeader title={'کارتابل'} />

      <Box className="mt-2 flex-[1_1_0] overflow-auto">
        <DataGridPremium
          rows={inbox ?? []}
          columns={columns}
          getRowId={(rows) => rows.app_title}
          showToolbar
          pagination
          autoPageSize
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          paginationMode="client"
          apiRef={gridApiRef}
          loading={inboxIsLoading}
          slotProps={{
            row: {
              onFocus: (event: any) => {
                const rowId = event.currentTarget.getAttribute('data-id');
                const row = gridApiRef.current?.getRow(rowId ?? 0);
                selectedWorkflowEngineInbox.current = row;
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

      {operation === 'PROSECCMAKER' && (
        <WorkFlowEngineFeatureSharedDialogProcessMaker
          data={selectedWorkflowEngineInbox.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'NOTE' && (
        <WorkFlowEngineFeatureSharedDialogNote
          data={selectedWorkflowEngineInbox.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'INCOMINGDOCUMENTS' && (
        <WorkFlowEngineFeatureSharedDialogIncomingDocument
          id={selectedWorkflowEngineInbox.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'OUTPUTDOCUMENT' && (
        <WorkFlowEngineFeatureSharedDialogOutPutDocument
          id={selectedWorkflowEngineInbox.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'SUMMARY' && (
        <WorkFlowEngineFeatureSharedDialogSummary
          data={selectedWorkflowEngineInbox.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'PROCESSINFORMATION' && (
        <WorkFlowEngineFeatureSharedDialogProcessInformation
          data={selectedWorkflowEngineInbox.current}
          onclose={() => setOperation('null')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureInbox;
