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
  GetSaveProcessVaribleSelection,
  ListDictionaryWorkFlowType,
  SaveProcessVaribleSelectionAPIPARAMS,
  VaribleSelection,
  WorkflowVariableMap,
} from 'libs/workflow-engine/data/data-settings/src/lib/data-settings-getproject.models';
import Box from '@mui/material/Box';

export function WorkFLowEngineFeatureSettingsComponent() {
  const [listWorkFlow, setListWorkFlow] = React.useState<
    DetailedProcessVaribles[] | []
  >([]);

  const [ListDictionaryWorkFlow, setListDictionaryWorkFlow] =
    React.useState<WorkflowVariableMap>({});
  const [selectedWorkFlow, setSelectedWorkFlow] = React.useState({});

  let ProcessIdWorkFlow = React.useRef<GetProjects | null>(null);

  let listOfItemSelectedUserOfCheckbox: {
    ProcessUid: string;
    selections: {
      ProcessUid: string;
      ProcessName: string;
      VariableUid: string;
      VariableName: string;
    }[];
  } = {
    ProcessUid: '',
    selections: [],
  };

  const { data: settingsProject, isLoading: isLoadingSettingsProject } =
    useGetSettingsProjectQuery();

  const [
    PostDetailedProcessVaribles,
    { isLoading: isLoadingDetailedProcessVaribles },
  ] = usePostDetailedProcessVariblesMutation();

  let parsedData: any[] = [];

  try {
    const json =
      typeof settingsProject === 'string'
        ? JSON.parse(settingsProject)
        : settingsProject;

    parsedData = Array.isArray(json) ? json : json?.result ?? [];
  } catch (error) {
    console.error('خطا در parse کردن JSON: ', error);
    parsedData = [];
  }

  const [postGetSaveProcessVaribleSelection] =
    usePostGetSaveProcessVaribleSelectionMutation();

  const Onchange = (data: any) => {
    ProcessIdWorkFlow.current = data;
    // setIDWorkFlow(data);
    PostDetailedProcessVaribles({ payload: { prj_uid: data?.prj_uid } })
      .unwrap()
      .then((value) => {
        setListWorkFlow(JSON.parse(value));
        const result = JSON.parse(value).reduce((acc: any, item: any) => {
          acc[item.var_uid] = {
            status: false,
            selectedObjectWorkFlow: data,
            ...item,
          };
          return acc;
        }, {} as Record<string, boolean>);

        postGetSaveProcessVaribleSelection({
          payload: { processUid: data.prj_uid },
        }).then((value) => {
          JSON.parse(value?.data).forEach(
            (item: GetSaveProcessVaribleSelection) => {
              result[item.VariableUid] = {
                ...result[item.VariableUid],
                status: true,
              };
            }
          );

          const resulteDefaulter = JSON.parse(value?.data).reduce(
            (acc, item: GetSaveProcessVaribleSelection) => {
              acc[item.VariableUid] = {
                ...item,
                status: true,
                selectedObjectWorkFlow: data,
              };
              return acc;
            },
            {}
          );
          setSelectedWorkFlow((prev) => ({
            ...prev,
            ...resulteDefaulter,
          }));
        });

        setListDictionaryWorkFlow(result);
      });
  };

  const handleChangeCheckbox = (item: DetailedProcessVaribles) => {
    if (!ListDictionaryWorkFlow[item.var_uid].status) {
      setSelectedWorkFlow((prev) => ({
        ...prev,
        [item.var_uid]: {
          ...ListDictionaryWorkFlow[item.var_uid],
          status: true,
        },
      }));
    } else {
      const { [item.var_uid]: remove, ...restValue } = selectedWorkFlow;
      setSelectedWorkFlow(() => restValue);
    }

    setListDictionaryWorkFlow((prev) => ({
      ...prev,
      [item.var_uid]: {
        ...ListDictionaryWorkFlow[item.var_uid],
        status: !ListDictionaryWorkFlow[item.var_uid].status,
      },
    }));
  };

  React.useEffect(() => {
    listOfItemSelectedUserOfCheckbox = {
      ProcessUid: '',
      selections: [],
    };
    if (listWorkFlow.length && ListDictionaryWorkFlow) {
      const listOfItemCreated: VaribleSelection[] = [];
      Object.keys(selectedWorkFlow)?.forEach((item, index) => {
        listOfItemCreated.push({
          ProcessUid:
            ListDictionaryWorkFlow[item]?.selectedObjectWorkFlow?.prj_uid,
          ProcessName:
            ListDictionaryWorkFlow[item]?.selectedObjectWorkFlow?.prj_name,
          VariableUid: ListDictionaryWorkFlow[item]?.var_uid,
          VariableName: ListDictionaryWorkFlow[item]?.var_name,
        });
      });

      listOfItemSelectedUserOfCheckbox.ProcessUid =
        ProcessIdWorkFlow.current?.prj_uid ?? '';

      listOfItemSelectedUserOfCheckbox.selections = listOfItemCreated;
    }
  }, [selectedWorkFlow]);

  const [postSaveProcessVaribleSelection, { isLoading }] =
    usePostSaveProcessVaribleSelectionMutation();

  const handleRegistery = () => {
    postSaveProcessVaribleSelection({
      payload: listOfItemSelectedUserOfCheckbox,
    }).then((value) => {});
  };

  return (
    <div className=" flex flex-1 flex-col  ">
      <SharedUiWidgetHeader />
      <div className="flex flex-col gap-4">
        <Autocomplete
          options={parsedData}
          loading={isLoadingSettingsProject}
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
              className="bg-white"
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
          // className="mt-4 w-60"
          className="mt-6 "
        />

        <Box
          // className=" h-[300px]  overflow-auto"
          component="section"
          className="border-solid border-2 border-black  h-[300px] w-full  shadow-md rounded-lg  overflow-auto "
        >
          {listWorkFlow.length ? (
            <FormGroup>
              {listWorkFlow?.map((item, index) => {
                return (
                  <FormControlLabel
                    className="bg-white flex m-1 p-2"
                    control={
                      <Checkbox
                        checked={ListDictionaryWorkFlow[item.var_uid].status}
                        onChange={() => handleChangeCheckbox(item)}
                        // name="gilad"
                      />
                    }
                    label={item.var_name}
                  />
                );
              })}
            </FormGroup>
          ) : (
            isLoadingDetailedProcessVaribles && (
              <Box
                sx={{
                  display: 'flex',
                  height: '300px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CircularProgress />
              </Box>
            )
          )}
        </Box>
      </div>
      <Button
        onClick={handleRegistery}
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
