import React, { useMemo } from 'react';
import { useRef } from 'react';
import {
  DataGridPremium,
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
  useGridApiRef,
} from '@mui/x-data-grid-premium';
import { useColumnState } from '@office-automation/shared/util/core-hooks';
import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { SharedUiWidgetHeader } from '@office-automation/shared/ui/widget';
import Box from '@mui/material/Box';
import { useGetParticipatedAsyncQuery } from '@office-automation/workflow-engine/data/data-tracking';

import {
  WorkFlowEngineFeatureSharedDialogIncomingDocument,
  WorkFlowEngineFeatureSharedDialogNote,
  WorkFlowEngineFeatureSharedDialogOutPutDocument,
  WorkFlowEngineFeatureSharedDialogProcessInformation,
  WorkFlowEngineFeatureSharedDialogProcessMaker,
  WorkFlowEngineFeatureSharedDialogSummary,
} from '@office-automation/workflow-engine/feature/shared';

export function WorkFlowEngineFeatureTranking() {
  const [operation, setOperation] = React.useState<
    | 'PROSECCMAKER'
    | 'null'
    | 'NOTE'
    | 'INCOMINGDOCUMENTS'
    | 'OUTPUTDOCUMENT'
    | 'SUMMARY'
    | 'PROCESSINFORMATION'
  >('null');

  const {
    data: tracking,
    isLoading: isLoadingTracking,
    isFetching: isFetchingTracking,
  } = useGetParticipatedAsyncQuery();

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const rows = useRef<any[]>([]);

  const selectedWorkflowEngineTracking = useRef<any>(null);

  const gridApiRef = useGridApiRef();

  const dictionaryOfListItemsWorkFlowEngine = useRef({});

  const { newColumns } = useColumnState({
    row: rows.current,
    listDictionaryWorkFlow: dictionaryOfListItemsWorkFlowEngine.current,
  });

  const columns = useMemo(
    (): GridColDef[] => [
      { field: 'app_title', headerName: 'شماره کار', width: 90 },
      {
        field: 'app_pro_title',
        headerName: 'فرایند',
        width: 150,
        editable: true,
      },
      {
        field: 'app_tas_title',
        headerName: 'وظیفه',
        width: 150,
        editable: true,
      },
      {
        field: 'usr_Info',
        headerName: 'ارسال کننده',
        width: 110,
        editable: true,
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
        editable: true,
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
            label="اسناد ورودی"
            onClick={() => setOperation('INCOMINGDOCUMENTS')}
            showInMenu
          />,
          <GridActionsCellItem
            label="اسناد خروجی"
            onClick={() => setOperation('OUTPUTDOCUMENT')}
            showInMenu
          />,
          <GridActionsCellItem
            label="خلاصه"
            onClick={() => setOperation('SUMMARY')}
            showInMenu
          />,
          <GridActionsCellItem
            label="اطلاعات فرایند"
            onClick={() => setOperation('PROCESSINFORMATION')}
            showInMenu
          />,
        ],
      },
    ],
    [newColumns, setOperation]
  );

  return (
    <div className=" flex flex-1 flex-col  h-full ">
      <SharedUiWidgetHeader title={'پیگیری'} />

      <Box className="mt-2 flex-[1_1_0] overflow-auto">
        <DataGridPremium
          rows={tracking ?? []}
          columns={columns}
          getRowId={(rows) => rows.app_title}
          showToolbar
          pagination
          autoPageSize
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          paginationMode="client"
          apiRef={gridApiRef}
          // loading={true}
          slotProps={{
            row: {
              onFocus: (event: any) => {
                const rowId = event.currentTarget.getAttribute('data-id');
                const row = gridApiRef.current?.getRow(rowId ?? 0);
                selectedWorkflowEngineTracking.current = row;
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
          data={selectedWorkflowEngineTracking.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'NOTE' && (
        <WorkFlowEngineFeatureSharedDialogNote
          data={selectedWorkflowEngineTracking.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'INCOMINGDOCUMENTS' && (
        <WorkFlowEngineFeatureSharedDialogIncomingDocument
          id={selectedWorkflowEngineTracking.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'OUTPUTDOCUMENT' && (
        <WorkFlowEngineFeatureSharedDialogOutPutDocument
          id={selectedWorkflowEngineTracking.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'SUMMARY' && (
        <WorkFlowEngineFeatureSharedDialogSummary
          data={selectedWorkflowEngineTracking.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'PROCESSINFORMATION' && (
        <WorkFlowEngineFeatureSharedDialogProcessInformation
          data={selectedWorkflowEngineTracking.current}
          onclose={() => setOperation('null')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureTranking;
