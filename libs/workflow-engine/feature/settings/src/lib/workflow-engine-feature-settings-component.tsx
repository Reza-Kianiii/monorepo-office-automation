import WorkflowEngineFeatureSettingsAutocomplete from './workflow-engine-feature-settings-autocomplete';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import {
  // useGetDetailedProcessVariblesQuery,
  useGetSettingsProjectQuery,
  usePostDetailedProcessVariblesMutation,
} from '@office-automation/workflow-engine/data/data-settings';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { SharedUiWidgetHeader } from '@office-automation/shared/ui/widget';

export function WorkFLowEngineFeatureSettingsComponent() {
  const [idWorkFlow, setIDWorkFlow] = React.useState<null | string>();
  const [listWorkFlow, setListWorkFlow] = React.useState<any[]>([]);
  const [ListDictionaryWorkFlow, setListDictionaryWorkFlow] = React.useState();
  const [selectedWorkFlow, setSelectedWorkFlow] = React.useState([]);

  console.log(selectedWorkFlow, 'selectedWorkFlow');

  const { data: settingsProject, isLoading: isLoadingSettingsProject } =
    useGetSettingsProjectQuery();

  const [PostDetailedProcessVaribles] =
    usePostDetailedProcessVariblesMutation();

  let parsedData: any[] = [];

  try {
    const json =
      typeof settingsProject === 'string'
        ? JSON.parse(settingsProject)
        : settingsProject;

    // فرض: json یا یک آرایه‌ست، یا شی‌ای که توش یه فیلد آرایه هست مثل json.result
    parsedData = Array.isArray(json) ? json : json?.result ?? [];
  } catch (error) {
    console.error('خطا در parse کردن JSON:', error);
    parsedData = [];
  }

  const Onchange = (data: any) => {
    setIDWorkFlow(data?.prj_uid);
    PostDetailedProcessVaribles({ payload: { prj_uid: data?.prj_uid } })
      .unwrap()
      .then((value) => {
        setListWorkFlow(JSON.parse(value));
        const result = JSON.parse(value).reduce((acc, item) => {
          acc[item.var_uid] = false;
          return acc;
        }, {} as Record<string, boolean>);

        setListDictionaryWorkFlow(result);
      });
  };

  const handleChangeCheckbox = (item: any) => {
    if (!ListDictionaryWorkFlow[item.var_uid]) {
      setSelectedWorkFlow((prev) => [...prev, item.var_uid]);
    } else {
    }

    setListDictionaryWorkFlow((prev) => ({
      ...prev,
      [item.var_uid]: !prev[item.var_uid],
    }));
  };

  return (
    <div className=" flex flex-1 flex-col  h-full">
      <SharedUiWidgetHeader />
      <Autocomplete
        options={parsedData}
        loading={isLoadingSettingsProject}
        onChange={(_, data: CountryEntity | null) => {
          console.log(data, 'datadata');

          setListWorkFlow([]);
          setSelectedWorkFlow([]);
          Onchange(data);
          // setIDWorkFlow(data?.prj_uid);
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
        className="mt-4 w-56"
      />
      <div className=" h-[300px] w-[300px] overflow-auto">
        {listWorkFlow.length > 0 ? (
          <FormGroup>
            {listWorkFlow?.map((item, index) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ListDictionaryWorkFlow[item.var_uid] ?? false}
                      onChange={() => handleChangeCheckbox(item)}
                      name="gilad"
                    />
                  }
                  label={item.var_name}
                />
              );
            })}
          </FormGroup>
        ) : null}
      </div>
    </div>
  );
}

export default WorkFLowEngineFeatureSettingsComponent;
