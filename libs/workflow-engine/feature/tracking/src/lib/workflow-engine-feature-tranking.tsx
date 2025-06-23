import React, { useEffect, useMemo } from 'react';
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
import { VaribleSelection } from '@office-automation/workflow-engine/data/data-settings';
import { store } from '@office-automation/workflow-engine/utils/redux-store';
import {
  toggleButton,
  usePostParticipatedAsyncMutation,
} from '@office-automation/workflow-engine/data/data-tracking';
import WorkFlowEngineFeatureTrankingHorizontalFilters from './workflow-engine-feature-tranking-horizontal-filters';
import { useSelector } from 'react-redux';

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

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const selectedFilters = useSelector(
    (state) => state?.trackingFiltersHorizontal
  );

  const rows = useRef<any[]>([]);

  const selectedWorkflowEngineTraking = useRef<any>(null);

  const gridApiRef = useGridApiRef();

  const [postParticipatedAsync] = usePostParticipatedAsyncMutation();

  // const { data: dataDraft, isLoading: isloadingDraft } = useGetCasesDraftQuery(
  //   {}
  // );

  useEffect(() => {
    postParticipatedAsync({
      payload: selectedFilters,
    }).then((value) => {
      rows.current = JSON.parse(value?.data);
    });
  }, [selectedFilters]);

  type ProcessVarsMap = {
    [keyId: string]: string[];
  };

  const selectedVaribleItemWorkFlow = useRef<ProcessVarsMap>({});
  const dicitionaryOfListItemsWorkFlowEngine = useRef({});

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

      <div className="flex flex-1 flex-col h-full">
        <WorkFlowEngineFeatureTrankingHorizontalFilters
          listDictionaryItemsWorkFlowEngine={
            dicitionaryOfListItemsWorkFlowEngine
          }
          handleClick={handleClick}
        />
        <Box className="mt-2 flex-[1_1_0] overflow-auto">
          <DataGridPremium
            rows={rows.current ?? []}
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
                  selectedWorkflowEngineTraking.current = row;
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
          data={selectedWorkflowEngineTraking.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'NOTE' && (
        <WorkFlowEngineFeatureSharedDialogNote
          data={selectedWorkflowEngineTraking.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'INCOMINGDOCUMENTS' && (
        <WorkFlowEngineFeatureSharedDialogIncomingDocument
          id={selectedWorkflowEngineTraking.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'OUTPUTDOCUMENT' && (
        <WorkFlowEngineFeatureSharedDialogOutPutDocument
          id={selectedWorkflowEngineTraking.current?.app_uid}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'SUMMARY' && (
        <WorkFlowEngineFeatureSharedDialogSummary
          data={selectedWorkflowEngineTraking.current}
          onclose={() => setOperation('null')}
        />
      )}
      {operation === 'PROCESSINFORMATION' && (
        <WorkFlowEngineFeatureSharedDialogProcessInformation
          data={selectedWorkflowEngineTraking.current}
          onclose={() => setOperation('null')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureTranking;
