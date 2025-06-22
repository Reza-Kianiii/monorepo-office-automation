import Box from '@mui/material/Box';

import React, { useEffect, useRef } from 'react';
// import { GridRowParams } from '@mui/x-data-grid';
// import { GridActionsCellItem, GridRowParams } from '@mui/x-data-grid-pro';
import { SharedUiWidgetHeader } from '@office-automation/shared/ui/widget';
import {
  DataGridPremium,
  useGridApiRef,
  GridColDef,
  GridRowParams,
  GridActionsCellItem,
} from '@mui/x-data-grid-premium';

import {
  toggleButton,
  usePostGetDataInboxMutation,
} from '@office-automation/workflow-engine/data/data-inbox';
import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
import WorkflowEngineFeatureInboxModels, {
  WorkflowEngineFeatureInboxIncomingDocumentsModels,
  WorkflowEngineFeatureInboxModelsf,
  WorkflowEngineFeatureInboxModelsProcessMaker,
  WorkflowEngineFeatureInboxOutPutDocumentModels,
  WorkflowEngineFeatureInboxProcessInformationModels,
  WorkflowEngineFeatureInboxSummaryModels,
} from './workflow-engine-feature-inbox-models';
import WorkFlowEngineFeatureInboxHorizontalFilter from './workflow-engine-feature-inbox-horizontal-filters';
import { store } from '@office-automation/workflow-engine/utils/redux-store';
import { useSelector } from 'react-redux';
import { VaribleSelection } from '@office-automation/workflow-engine/data/data-settings';
// import WorkflowEngineFeatureInboxModelsf from './workflow-engine-feature-inbox-models';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useColumnState } from '@office-automation/shared/util/core-hooks';

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

  const selectedVaribleItemWorkFlow = useRef<ProcessVarsMap>({});
  const dicitionaryOfListItemsWorkFlowEngine = useRef({});

  const [postGetDataInbox, { isLoading }] = usePostGetDataInboxMutation();

  const selectedFilters = useSelector((state) => state?.inboxFiltersHorizontal);
  console.log(selectedFilters, 'selectedfilteruuuuiui');

  const rows = useRef<any[]>([]);

  useEffect(() => {
    postGetDataInbox({
      payload: selectedFilters,
    }).then((value) => {
      rows.current = JSON.parse(value?.data);
    });
  }, [selectedFilters]);

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const handleClick = (item: VaribleSelection) => {
    const { ProcessUid, VariableName } = item;

    const currentVars = selectedVaribleItemWorkFlow.current[ProcessUid] || [];

    if (!selectedVaribleItemWorkFlow.current[ProcessUid]) {
      selectedVaribleItemWorkFlow.current[ProcessUid] = [VariableName];
    } else {
      if (!currentVars.includes(VariableName)) {
        selectedVaribleItemWorkFlow.current[ProcessUid] = [
          ...currentVars,
          VariableName,
        ];
      } else {
        const filtered = currentVars.filter((v) => v !== VariableName);
        if (filtered.length === 0) {
          delete selectedVaribleItemWorkFlow.current[ProcessUid];
        } else {
          selectedVaribleItemWorkFlow.current[ProcessUid] = filtered;
        }
      }
    }

    store.dispatch(toggleButton(selectedVaribleItemWorkFlow.current));
  };

  const { newColumns } = useColumnState({
    row: rows.current,
    listDictionaryWorkFlow: dicitionaryOfListItemsWorkFlowEngine.current,
  });

  const columns: GridColDef[] = [
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
      type: 'number',
      width: 110,
      editable: true,
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

      <div className="flex flex-1 flex-col h-full">
        <WorkFlowEngineFeatureInboxHorizontalFilter
          listDictionaryItemsWorkFlowEngine={
            dicitionaryOfListItemsWorkFlowEngine
          }
          handleClick={handleClick}
        />
        <Box className="mt-2 flex-[1_1_0] overflow-auto">
          <DataGridPremium
            rows={rows.current}
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
      </div>
      {operation === 'PROSECCMAKER' && (
        <WorkflowEngineFeatureInboxModelsProcessMaker
          dataInbox={selectedWorkflowEngineInbox.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'NOTE' && (
        <WorkflowEngineFeatureInboxModelsf
          dataInbox={selectedWorkflowEngineInbox.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'INCOMINGDOCUMENTS' && (
        <WorkflowEngineFeatureInboxIncomingDocumentsModels
          idInbox={selectedWorkflowEngineInbox.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'OUTPUTDOCUMENT' && (
        <WorkflowEngineFeatureInboxOutPutDocumentModels
          idInbox={selectedWorkflowEngineInbox.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'SUMMARY' && (
        <WorkflowEngineFeatureInboxSummaryModels
          inbox={selectedWorkflowEngineInbox.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'PROCESSINFORMATION' && (
        <WorkflowEngineFeatureInboxProcessInformationModels
          inbox={selectedWorkflowEngineInbox.current}
          onclose={() => setOperation('null')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureInbox;
