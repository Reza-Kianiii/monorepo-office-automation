import { TextField } from '@mui/material';
import WorkFlowEngineFeatureProcessessAutocomplete from './workflow-engine-feature-processes-autocomplete';
import { useFormContext } from 'react-hook-form';

export function WorkFlowEngineFeatureProcessesForm() {
  const method = useFormContext();

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <TextField
          error={false}
          {...method.register('prj_name')}
          label="نام پروژه"
          // {...methods.register('Name')}
          variant="filled"
        />
        <TextField
          error={false}
          label="شرح"
          {...method.register('prj_description')}
          // {...methods.register('ServerName')}
          variant="filled"
        />
      </div>
      <div className="grid grid-cols-2  ">
        <WorkFlowEngineFeatureProcessessAutocomplete />
      </div>
    </div>
  );
}
