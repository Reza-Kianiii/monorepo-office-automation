import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import {
  // useGetDetailedProcessVariblesQuery,
  useGetSettingsProjectQuery,
  usePostDetailedProcessVariblesMutation,
  usePostGetSaveProcessVaribleSelectionMutation,
  usePostSaveProcessVaribleSelectionMutation,
} from '@office-automation/workflow-engine/data/data-settings';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { SharedUiWidgetHeader } from '@office-automation/shared/ui/widget';
import Button from '@mui/material/Button';
import {
  DetailedProcessVaribles,
  GetProjects,
  WorkflowVariableMap,
} from 'libs/workflow-engine/data/data-settings/src/lib/data-settings-getproject.models';
import Box from '@mui/material/Box';
import { useGetProjectReportTablesQuery } from '@office-automation/workflow-engine/data/data_reports';
import { Controller, useForm } from 'react-hook-form';

import {
  DataGridPremium,
  useGridApiRef,
  GridColDef,
  GridRowParams,
  GridActionsCellItem,
} from '@mui/x-data-grid-premium';

export function WorkFLowEngineFeatureSettingsComponent() {
  const [listWorkFlow, setListWorkFlow] = React.useState<
    DetailedProcessVaribles[] | []
  >([]);

  const [ListDictionaryWorkFlow, setListDictionaryWorkFlow] =
    React.useState<WorkflowVariableMap>({});
  const [selectedWorkFlow, setSelectedWorkFlow] = React.useState({});

  const { data: settingsProject, isLoading: isLoadingSettingsProject } =
    useGetSettingsProjectQuery();

  const methods = useForm({
    defaultValues: {
      selectedItemSettingsProject: null,
    },
  });

  const { data: reportTables, isLoading: isLoadingRpoertTables } =
    useGetProjectReportTablesQuery(
      {
        projectId: methods.watch('selectedItemSettingsProject')
          ?.prj_uid as string,
      },
      {
        skip: !methods?.watch('selectedItemSettingsProject'),
      }
    );

  return (
    <div className=" flex flex-1 flex-col  ">
      <SharedUiWidgetHeader />
      <div className="flex flex-col gap-4 ">
        <div className="flex   gap-4 w-[70%]">
          <Controller
            name="selectedItemSettingsProject"
            control={methods.control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                options={settingsProject ?? []}
                loading={isLoadingSettingsProject}
                value={value}
                onChange={(_, data: GetProjects | null) =>
                  onChange(data ?? null)
                }
                getOptionLabel={(option) => option?.prj_name || ''}
                isOptionEqualToValue={(option, value) =>
                  option.prj_uid === value?.prj_uid
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="فرایند ها"
                    className="bg-white"
                    // error={!!errors.selectedItemSettingsProject}
                    // helperText={
                    //   errors.selectedItemSettingsProject?.message as string
                    // }
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {isLoadingSettingsProject ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      },
                    }}
                  />
                )}
                className="mt-6 w-1/2"
              />
            )}
          />

          <Autocomplete
            options={[]}
            // loading={isLoadingSettingsProject}
            onChange={(_, data: GetProjects | null) => {
              setListWorkFlow([]);
              if (!data) {
                setSelectedWorkFlow([]);
              } else {
                Onchange(data);
              }
            }}
            getOptionLabel={(option) => option?.prj_name}
            // defaultValue={countries?.find((item: CountryEntity) => item.id === 2)}
            isOptionEqualToValue={(option, value) =>
              option.prj_uid === value.prj_uid
            }
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                label={'فرایند ها'}
                className="bg-white "
                slotProps={{
                  input: {
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isLoadingSettingsProject ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
            className="mt-6 w-1/2"
          />
        </div>
        <Box className={'flex'}>
          <DataGridPremium
            rows={[]}
            columns={[]}
            // getRowId={(rows) => rows.app_title}
            showToolbar
            pagination
            autoPageSize
            // paginationModel={paginationModel}
            // onPaginationModelChange={setPaginationModel}
            paginationMode="client"
            // apiRef={gridApiRef}
            // loading={inboxIsLoading}
            // slotProps={{
            //   row: {
            //     onFocus: (event: any) => {
            //       const rowId = event.currentTarget.getAttribute('data-id');
            //       const row = gridApiRef.current?.getRow(rowId ?? 0);
            //       selectedWorkflowEngineInbox.current = row;
            //     },
            //   },
            // }}
            checkboxSelection
            disableRowSelectionOnClick
            initialState={{
              pinnedColumns: { left: ['actions'] },
            }}
            // initialState={initialState}
          />

          <div className="flex flex-col">
            <Button
              // onClick={handleRegistery}
              variant="contained"
              // className=" w-[100px] mt-6"
              sx={{ width: '100px', mt: 2 }}
            >
              ثبت
            </Button>
            <Button
              // onClick={handleRegistery}
              variant="contained"
              // className=" w-[100px] mt-6"
              sx={{ width: '100px', mt: 2 }}
            >
              ثبت
            </Button>
          </div>

          <DataGridPremium
            rows={[]}
            columns={[]}
            // getRowId={(rows) => rows.app_title}
            showToolbar
            pagination
            autoPageSize
            // paginationModel={paginationModel}
            // onPaginationModelChange={setPaginationModel}
            paginationMode="client"
            // apiRef={gridApiRef}
            // loading={inboxIsLoading}
            // slotProps={{
            //   row: {
            //     onFocus: (event: any) => {
            //       const rowId = event.currentTarget.getAttribute('data-id');
            //       const row = gridApiRef.current?.getRow(rowId ?? 0);
            //       selectedWorkflowEngineInbox.current = row;
            //     },
            //   },
            // }}
            checkboxSelection
            disableRowSelectionOnClick
            initialState={{
              pinnedColumns: { left: ['actions'] },
            }}
            // initialState={initialState}
          />
        </Box>
      </div>
      <Button
        // onClick={handleRegistery}
        variant="contained"
        // className=" w-[100px] mt-6"
        sx={{ width: '100px', mt: 2 }}
      >
        ثبت
      </Button>
    </div>
  );
}

export default WorkFLowEngineFeatureSettingsComponent;
