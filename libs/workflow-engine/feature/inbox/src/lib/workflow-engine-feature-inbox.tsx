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
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'کد', headerName: 'کد', width: 90 },
  {
    field: 'firstName',
    headerName: 'نام',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'فامیلی',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'سن',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'نام و نام خانوادگی',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    flex: 1, // به‌جای width: 300
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
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
  return (
    <div className="  flex flex-1 flex-col ">
      <Paper className="mt-2 mb-2 h-[100px] flex flex-col justify-between p-2 shadow">
        <div
          className="flex items-center justify-between"
          style={{ fontSize: '30px', fontWeight: 'bold' }}
        >
          کارتابل
        </div>
        <div>مدیریت فرایندها / کارتابل</div>
      </Paper>

      {/* <Box sx={{ height: '100%' }}> */}
      <DataGridPro
        rows={rows}
        columns={columns}
        slotProps={{
          filterPanel: {
            sx: {
              '& .MuiFormControl-root': {
                marginTop: 0,
                marginBottom: 0,
              },
              '& .MuiInputBase-root, & .MuiSelect-root, & .MuiTextField-root': {
                height: '40px',
                display: 'flex',
                alignItems: 'center',
              },
              '& .MuiGrid-root': {
                alignItems: 'center !important',
              },
            },
          },
        }}
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
