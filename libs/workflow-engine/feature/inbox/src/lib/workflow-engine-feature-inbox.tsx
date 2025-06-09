import Box from '@mui/material/Box';

import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import {
  Breadcrumbs,
  Grid,
  Link,
  Paper,
  Skeleton,
  styled,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useMatches, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  DataGrid,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import FilterListIcon from '@mui/icons-material/FilterList';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import {
  FilterColumnsArgs,
  GetColumnForNewFilterArgs,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { SharedUiWidgetHeader } from '@office-automation/shared/ui/widget';
import {
  DataGridPremium,
  GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import {
  useGetBindVaribleSelectionsQuery,
  useGetDataInboxQuery,
} from '@office-automation/workflow-engine/data/data-inbox';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
import WorkflowEngineFeatureInboxModels from './workflow-engine-feature-inbox-models';
import { format } from 'date-fns-jalali';
import moment from 'moment-jalaali';
import WorkFlowEngineFeatureInboxHorizontalFilter from './workflow-engine-feature-inbox-horizontal-filters';
export function WorkFlowEngineFeatureInbox() {
  const [operation, setOperation] = React.useState<'proseccMaker' | 'null'>(
    'null'
  );

  const selectedWorkflowEngineInbox = useRef<any>(null);

  const gridApiRef = useGridApiRef();

  const { data, isLoading, isFetching } = useGetDataInboxQuery();

  const { data: bindVaribleSelections } = useGetBindVaribleSelectionsQuery();

  if (bindVaribleSelections) {
    console.log(JSON.parse(bindVaribleSelections), 'kkkkkkk');
  }

  const rows = useMemo(() => {
    if (data) {
      return JSON.parse(data);
    }
  }, [isLoading]);

  console.log(rows, 'rows');

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  // const columns: GridColDef<(typeof rows)[number]>[] = [
  //   { field: 'id', headerName: 'شناسه', width: 600 },
  //   {
  //     field: 'name',
  //     headerName: 'نام',
  //     width: 150,
  //     editable: true,
  //   },
  // ];
  const columns: GridColDef<(typeof rows)[number]>[] = [
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

      // valueGetter: (value) => {
      //   if (!value) return '';

      //   const date = moment.from(value, 'fa', 'jYYYY/jMM/jDD').toDate();
      //   return format(date, 'yyyy/MM/dd');
      // },
      sortable: false,
      width: 160,
    },
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
      width: 180,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<ScreenShareSharpIcon />}
          label="نمایش"
          onClick={() => setOperation('proseccMaker')}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          // onClick={deleteUser(params.id)}
        />,
        <GridActionsCellItem
          // icon={<SecurityIcon />}
          label={'نمایش'}
          // onClick={toggleAdmin(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          // icon={<FileCopyIcon />}
          label="اسناد پیوست شده"
          // onClick={duplicateUser(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          // icon={<FileCopyIcon />}
          label="اطلاعات فرایند"
          // onClick={duplicateUser(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          // icon={<FileCopyIcon />}
          label="تاریخچه پیام ها"
          // onClick={duplicateUser(params.id)}
          showInMenu
        />,
      ],
    },
  ];

  console.log('rerender');

  return (
    <div className=" flex flex-1 flex-col  h-full ">
      <SharedUiWidgetHeader />

      {/* <div className="flex flex-1 flex-col overflow-auto bg-transparent"> */}
      <div className="flex flex-1 flex-col h-full">
        <WorkFlowEngineFeatureInboxHorizontalFilter />
        <Box className="mt-2 flex-[1_1_0] overflow-auto">
          <DataGridPremium
            rows={rows ?? []}
            columns={columns}
            getRowId={(rows) => rows.app_title}
            showToolbar
            pagination
            autoPageSize
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="client"
            apiRef={gridApiRef}
            // loading={loading}
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
      {operation === 'proseccMaker' && (
        <WorkflowEngineFeatureInboxModels
          onclose={() => setOperation('null')}
          dataInbox={selectedWorkflowEngineInbox.current}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureInbox;
