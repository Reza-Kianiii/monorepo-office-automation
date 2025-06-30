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
import { AddButton } from '@office-automation/shared/ui/button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetProcessesQuery } from '@office-automation/workflow-engine/data/data-processes';
import {
  WorkFlowEngineFeatureProcessesCreateDialog,
  WorkFlowEngineFeatureProcessesDeleteDialog,
  WorkFlowEngineFeatureProcessesDialog,
} from './workflow-engine-feature-processes-dialog';

export function WorkFlowEngineFeatureProcesses() {
  const [operation, setOperation] = React.useState<
    'DELETE' | 'CREATE' | 'NULL' | 'process'
  >('NULL');

  const selectedWorkflowEngineProcesses = useRef<any>(null);

  const gridApiRef = useGridApiRef();

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const { data: dataProcesses, isLoading: isLoadingProcesses } =
    useGetProcessesQuery();

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'Name',
        headerName: 'ردیف',
        width: 90,
      },
      {
        field: 'prj_name',
        headerName: 'نام فرایند',
        width: 150,
        editable: false,
      },
      {
        field: 'cat_name',
        headerName: 'دسته بندی',
        width: 150,
        editable: false,
      },
      {
        field: 'Prj_status',
        headerName: 'وضعیت',
        sortable: false,
        width: 160,
      },
      {
        field: 'prj_type',
        headerName: 'نوع',
        sortable: false,
        width: 160,
      },

      {
        field: 'actions',
        type: 'actions',
        width: 50,
        getActions: (params: GridRowParams) => [
          <GridActionsCellItem
            icon={<CreditCardIcon />}
            label="فرایند"
            onClick={() => setOperation('process')}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<DeleteIcon className="flex gap-4" />}
            label="حذف"
            onClick={() => setOperation('DELETE')}
            showInMenu
          />,
        ],
      },
    ],
    [setOperation]
  );

  return (
    <div className=" flex flex-1 flex-col  h-full ">
      <SharedUiWidgetHeader
        title={'فرایند ها'}
        actions={
          <>
            {
              <AddButton
                onClick={() => setOperation('CREATE')}
                loading={isLoadingProcesses}
              />
            }
          </>
        }
      />

      <div className="flex flex-1 flex-col h-full">
        <Box className="mt-2 flex-[1_1_0] overflow-auto">
          <DataGridPremium
            rows={dataProcesses ? JSON.parse(dataProcesses) : []}
            columns={columns}
            // getRowId={(rows) => rows.app_title}
            getRowId={(rows) => rows?.prj_uid}
            showToolbar
            pagination
            autoPageSize
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="client"
            apiRef={gridApiRef}
            loading={isLoadingProcesses}
            slotProps={{
              row: {
                onFocus: (event: any) => {
                  const rowId = event.currentTarget.getAttribute('data-id');
                  const row = gridApiRef.current?.getRow(rowId ?? 0);
                  selectedWorkflowEngineProcesses.current = row;
                },
              },
            }}
            checkboxSelection
            disableRowSelectionOnClick
            initialState={{
              pinnedColumns: { left: ['actions'] },
            }}
          />
        </Box>
      </div>
      {operation === 'CREATE' && (
        <WorkFlowEngineFeatureProcessesCreateDialog
          onclose={() => setOperation('NULL')}
        />
      )}
      {operation === 'process' && (
        <WorkFlowEngineFeatureProcessesDialog
          data={selectedWorkflowEngineProcesses.current}
          onclose={() => setOperation('NULL')}
        />
      )}
      {operation === 'DELETE' && (
        <WorkFlowEngineFeatureProcessesDeleteDialog
          data={selectedWorkflowEngineProcesses.current}
          onclose={() => setOperation('NULL')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureProcesses;
