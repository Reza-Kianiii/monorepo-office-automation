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
import { useGetSelectEnginsQuery } from '@office-automation/workflow-engine/data/data-select-engings';
import {
  WorkFlowEngineFeatureSelectEnginsCreateDialog,
  WorkFlowEngineFeatureSelectEnginsDeleteDialog,
  WorkFlowEngineFeatureSelectEnginsEditDialog,
} from './workflow-engine-feature-select-engins-dialog';
import { AddButton } from '@office-automation/shared/ui/button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeleteIcon from '@mui/icons-material/Delete';

export function WorkFlowEngineFeatureSelectEngins() {
  const [operation, setOperation] = React.useState<
    'DELETE' | 'CREATE' | 'EDIT' | 'NULL' | 'AUTOMATICCONFIGURATION'
  >('NULL');

  const selectedWorkflowEngineSelecEngins = useRef<any>(null);

  const gridApiRef = useGridApiRef();

  const { data: selectEngins, isLoading: isLoadingSelectEngins } =
    useGetSelectEnginsQuery();

  if (selectEngins) {
    console.log(JSON.parse(selectEngins), 'selectengins');
  }

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'Name',
        headerName: 'عنوان',
        width: 90,
      },
      {
        field: 'ServerName',
        headerName: 'نام سرور',
        width: 150,
        editable: false,
      },
      {
        field: 'DbName',
        headerName: 'نام پایگاه داده',
        width: 150,
        editable: false,
      },
      {
        field: 'DbUserName',
        headerName: 'نام کاربر پایگاه داده',
        sortable: false,
        width: 160,
      },
      {
        field: 'WebAddress',
        headerName: 'ادرس وب موتور',
        sortable: false,
        width: 160,
      },
      {
        field: 'LocalWebAddress',
        headerName: 'ادرس وب موتور شبکه داخلی',
        width: 110,
        editable: false,
        flex: 1,
      },
      {
        field: 'actions',
        type: 'actions',
        width: 50,
        getActions: (params: GridRowParams) => [
          <GridActionsCellItem
            icon={<CreditCardIcon />}
            label="ویرایش"
            onClick={() => setOperation('EDIT')}
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
        title={'موتور ها '}
        actions={
          <>
            {
              <AddButton
                onClick={() => setOperation('CREATE')}
                loading={isLoadingSelectEngins}
              />
            }
          </>
        }
      />

      <div className="flex flex-1 flex-col h-full">
        <Box className="mt-2 flex-[1_1_0] overflow-auto">
          <DataGridPremium
            rows={selectEngins ? JSON.parse(selectEngins) : []}
            columns={columns}
            // getRowId={(rows) => rows.app_title}
            getRowId={(rows) => rows?.Id}
            showToolbar
            pagination
            autoPageSize
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="client"
            apiRef={gridApiRef}
            loading={isLoadingSelectEngins}
            slotProps={{
              row: {
                onFocus: (event: any) => {
                  const rowId = event.currentTarget.getAttribute('data-id');
                  const row = gridApiRef.current?.getRow(rowId ?? 0);
                  selectedWorkflowEngineSelecEngins.current = row;
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
      {operation === 'CREATE' && (
        <WorkFlowEngineFeatureSelectEnginsCreateDialog
          onclose={() => setOperation('NULL')}
        />
      )}
      {operation === 'EDIT' && (
        <WorkFlowEngineFeatureSelectEnginsEditDialog
          data={selectedWorkflowEngineSelecEngins.current}
          onclose={() => setOperation('NULL')}
        />
      )}
      {operation === 'DELETE' && (
        <WorkFlowEngineFeatureSelectEnginsDeleteDialog
          data={selectedWorkflowEngineSelecEngins.current}
          onclose={() => setOperation('NULL')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureSelectEngins;
