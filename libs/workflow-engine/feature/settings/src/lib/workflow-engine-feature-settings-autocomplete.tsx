import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetSettingsProjectQuery } from '@office-automation/workflow-engine/data/data-settings';

export function WorkflowEngineFeatureSettingsAutocomplete() {
  const [idWorkFlow, setIDWorkFlow] = React.useState<null | string>();

  const { data: rawData, isLoading } = useGetSettingsProjectQuery();

  let parsedData: any[] = [];

  try {
    const json = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;

    parsedData = Array.isArray(json) ? json : json?.result ?? [];
  } catch (error) {
    console.error('خطا در parse کردن JSON:', error);
    parsedData = [];
  }

  return (
    <Autocomplete
      options={parsedData}
      loading={isLoading}
      onChange={(_, data: CountryEntity | null) => {
        console.log(data, 'dataonchange');
        // setCountryId(data?.id ?? null);
      }}
      getOptionLabel={(option) => option?.prj_name}
      // defaultValue={countries?.find((item: CountryEntity) => item.id === 2)}
      isOptionEqualToValue={(option, value) => option.prj_uid === value.prj_uid}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label={'test'}
          className="bg-white"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
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
  );
}

export default WorkflowEngineFeatureSettingsAutocomplete;

// renderInput={(params) => (
//   <TextField
//     {...params}
//     label="Asynchronous"
//     slotProps={{
//       input: {
//         ...params.InputProps,
//         endAdornment: (
//           <React.Fragment>
//             {loading ? (
//               <CircularProgress color="inherit" size={20} />
//             ) : null}
//             {params.InputProps.endAdornment}
//           </React.Fragment>
//         ),
//       },
//     }}
//   />
// )}
