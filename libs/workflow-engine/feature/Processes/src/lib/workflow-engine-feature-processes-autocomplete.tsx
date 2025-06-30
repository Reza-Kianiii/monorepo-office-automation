import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetCategoryQuery } from '@office-automation/workflow-engine/data/data-processes';
import { Controller, useFormContext } from 'react-hook-form';

export function WorkFlowEngineFeatureProcessessAutocomplete() {
  const { data: category, isLoading: isLoadingCatgory } = useGetCategoryQuery();

  const method = useFormContext();

  return (
    <Controller
      name="prj_category"
      control={method.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          options={category ? JSON.parse(category) : []}
          loading={isLoadingCatgory}
          value={value?.prj_category}
          onChange={(_, data) => onChange(data?.prj_category)}
          getOptionLabel={(option) => option?.Title ?? ''}
          isOptionEqualToValue={(option, value) => option?.Id === value?.Id}
          renderInput={(params) => (
            <TextField
              {...params}
              label="دسته بندی"
              size="small"
              className="bg-white"
              error={!!error}
              helperText={error?.message}
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isLoadingCatgory ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
          className="mt-4 w-full"
        />
      )}
    />
  );
}

export default WorkFlowEngineFeatureProcessessAutocomplete;
