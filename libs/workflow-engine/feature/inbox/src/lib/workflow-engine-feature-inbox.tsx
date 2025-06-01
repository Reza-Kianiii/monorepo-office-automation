import Box from '@mui/material/Box';

import React, { useCallback, useEffect, useMemo } from 'react';

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

import { SharedUiWidgetHeader } from '@office-automation/shared/ui/widget';
import {
  DataGridPremium,
  GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import { useGetDataInboxQuery } from '@office-automation/workflow-engine/data/data-inbox';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
import WorkflowEngineFeatureInboxModels from './workflow-engine-feature-inbox-models';
import { format } from 'date-fns-jalali';
import moment from 'moment-jalaali';
export function WorkFlowEngineFeatureInbox() {
  const [operation, setOperation] = React.useState<'proseccMaker' | 'null'>(
    'null'
  );

  const { data, isLoading, isFetching } = useGetDataInboxQuery();

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

      valueGetter: (value) => {
        if (!value) return '';

        const date = moment.from(value, 'fa', 'jYYYY/jMM/jDD').toDate();
        return format(date, 'yyyy/MM/dd');
      },
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

      {/* <DataGridPro
        rows={rowstest}
        columns={columns}
        autoPageSize
        // getRowId={() => {
        //   return 1;
        // }}
        // loading={isLoading}
        // slotProps={{
        //   filterPanel: {
        //     sx: {
        //       '& .MuiFormControl-root': {
        //         marginTop: 0,
        //         marginBottom: 0,
        //       },
        //       '& .MuiInputBase-root, & .MuiSelect-root, & .MuiTextField-root': {
        //         height: '40px',
        //         display: 'flex',
        //         alignItems: 'center',
        //       },
        //       '& .MuiGrid-root': {
        //         alignItems: 'center !important',
        //       },
        //     },
        //   },
        // }}
        // slots={{
        //   toolbar: CustomToolbar,
        // }}
        // pageSizeOptions={[5]}
        // paginationModel={paginationModel}
        // onPaginationModelChange={setPaginationModel}
        // paginationMode="client"
        // showToolbar
        // checkboxSelection
        // disableRowSelectionOnClick
      /> */}
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
          // apiRef={apiRef}
          // loading={loading}
          checkboxSelection
          disableRowSelectionOnClick
          initialState={{
            pinnedColumns: { left: ['actions'] },
          }}
          // initialState={initialState}
        />
      </Box>

      {operation === 'proseccMaker' && (
        <WorkflowEngineFeatureInboxModels
          onclose={() => setOperation('null')}
        />
      )}
    </div>
  );
}

export default WorkFlowEngineFeatureInbox;
