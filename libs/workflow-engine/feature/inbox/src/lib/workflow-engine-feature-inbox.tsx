import Box from '@mui/material/Box';

import React, { useCallback, useEffect } from 'react';

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
} from '@mui/x-data-grid-pro';

import { SharedUiWidgetHeader } from '@office-automation/shared/ui/widget';

import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import { useGetDataInboxQuery } from '@office-automation/workflow-engine/data/data-inbox';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'کد', headerName: 'کد', width: 90 },
  {
    field: 'firstName',
    headerName: 'شماره کار',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'شماره سند ',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'فرایند',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'وظیفه',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'test1',
    headerName: 'ارسال کننده',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'test2',
    headerName: 'تاریخ',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'test3',
    headerName: 'یادداشت',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'test4',
    headerName: 'انبار',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'test5',
    headerName: 'نام پیمانکار',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'test6',
    headerName: 'نام پروژه',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'test7',
    headerName: 'دوره مالی',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'test8',
    headerName: 'مهلت انجام',
    type: 'number',
    width: 110,
    editable: true,
    flex: 1, // به‌جای width: 300
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export function WorkFlowEngineFeatureInbox() {
  const { data } = useGetDataInboxQuery();
  if (data) {
    console.log(JSON.parse(data), 'datadatadatadatadatadatdata');
  }

  return (
    <div className="  flex flex-1 flex-col ">
      <SharedUiWidgetHeader />

      <DataGridPro
        rows={rows}
        columns={columns}
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
        showToolbar
        checkboxSelection
        disableRowSelectionOnClick
      />
      {/* </Box> */}
    </div>
  );
}

export default WorkFlowEngineFeatureInbox;
