import Box from '@mui/material/Box';
import React, { useMemo, useRef } from 'react';
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
import { useGetAdvanceSearchQuery } from '@office-automation/workflow-engine/data/data-advance-search';
export function WorkFlowEngineFeatureAdvanceSearch() {
  const [operation, setOperation] = React.useState<
    | 'PROSECCMAKER'
    | 'null'
    | 'NOTE'
    | 'INCOMINGDOCUMENTS'
    | 'OUTPUTDOCUMENT'
    | 'SUMMARY'
    | 'PROCESSINFORMATION'
  >('null');

  const selectedWorkflowEngineAdvanceSearch = useRef<any>(null);

  const gridApiRef = useGridApiRef();

  // const { data: drafts, isLoading: isLoadingDraft } = useGetDraftsQuery();

  const { data: advanceSearch, isLoading: isLoadingAdvanceSearch } =
    useGetAdvanceSearchQuery();

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'app_title',
        headerName: 'شماره کار/عنوان',
        width: 90,
        type: 'string',
      },
      {
        field: 'app_pro_title',
        headerName: 'فرایند',
        width: 150,
        editable: false,
        type: 'string',
      },
      {
        field: 'app_tas_title',
        headerName: 'وظیفه',
        width: 150,
        editable: false,
        type: 'string',
      },
      {
        field: 'asdf',
        headerName: 'ارسال توسط',
        sortable: false,
        width: 160,
        type: 'date',
      },
      {
        field: 'aaaa',
        headerName: 'مهلت اجرا',
        sortable: false,
        width: 160,
        type: 'date',
      },
      {
        field: 'del_task_due_date',
        headerName: 'اخرین تعییر',
        width: 110,
        editable: false,
      },
      {
        field: 'asdfa',
        headerName: 'الویت',
        width: 110,
        editable: false,
        flex: 1,
        type: 'string',
      },
      // {
      //   field: 'usr_Info',
      //   headerName: 'ارسال توسط',
      //   width: 110,
      //   editable: false,
      //   type: 'string',
      // },
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
    [setOperation]
  );

  return (
    <div className=" flex flex-1 flex-col  h-full ">
      <SharedUiWidgetHeader title={'جستجوی پیشترفته'} />

      <div className="flex flex-1 flex-col h-full">
        <Box className="mt-2 flex-[1_1_0] overflow-auto">
          <DataGridPremium
            rows={advanceSearch ?? []}
            columns={columns}
            getRowId={(rows) => rows.app_title}
            showToolbar
            pagination
            autoPageSize
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="client"
            apiRef={gridApiRef}
            loading={isLoadingAdvanceSearch}
            slotProps={{
              row: {
                onFocus: (event: any) => {
                  const rowId = event.currentTarget.getAttribute('data-id');
                  const row = gridApiRef.current?.getRow(rowId ?? 0);
                  selectedWorkflowEngineAdvanceSearch.current = row;
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
          data={selectedWorkflowEngineAdvanceSearch.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'NOTE' && (
        <WorkFlowEngineFeatureSharedDialogNote
          data={selectedWorkflowEngineAdvanceSearch.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'INCOMINGDOCUMENTS' && (
        <WorkFlowEngineFeatureSharedDialogIncomingDocument
          id={selectedWorkflowEngineAdvanceSearch.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'OUTPUTDOCUMENT' && (
        <WorkFlowEngineFeatureSharedDialogOutPutDocument
          id={selectedWorkflowEngineAdvanceSearch.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'SUMMARY' && (
        <WorkFlowEngineFeatureSharedDialogSummary
          data={selectedWorkflowEngineAdvanceSearch.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'PROCESSINFORMATION' && (
        <WorkFlowEngineFeatureSharedDialogProcessInformation
          data={selectedWorkflowEngineAdvanceSearch.current}
          onclose={() => setOperation('null')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureAdvanceSearch;
