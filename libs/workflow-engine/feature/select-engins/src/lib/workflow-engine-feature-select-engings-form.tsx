import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export function WorkFlowEngineFeatureSelectEnginsForm() {
  const methods = useFormContext();

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 m-2">
        <TextField
          error={false}
          label="عنوان"
          {...methods.register('Name')}
          variant="filled"
        />
        <TextField
          error={false}
          label="نام سرور"
          {...methods.register('ServerName')}
          variant="filled"
        />
        <TextField
          error={false}
          label="نام پایگاه داده"
          {...methods.register('DbName')}
          variant="filled"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 m-2">
        <TextField
          error={false}
          label="نام کاربر پایگاه داده"
          {...methods.register('DbUserName')}
          variant="filled"
        />
        <TextField
          error={false}
          label="رمز"
          {...methods.register('Password')}
          type="password"
          variant="filled"
        />
        <TextField
          error={false}
          label="نوع موتور"
          {...methods.register('EngineType')}
          variant="filled"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 m-2">
        <TextField
          error={false}
          label="ادرس فیزیکی پوشه برنامه"
          {...methods.register('PhisicalWebAddress')}
          variant="filled"
        />
        <TextField
          error={false}
          label="ادرس وب  موتور"
          {...methods.register('WebAddress')}
          variant="filled"
        />
        <TextField
          error={false}
          label="ادرس وب موتور شبکه داخلی"
          {...methods.register('LocalWebAddress')}
          variant="filled"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <TextField
          error={false}
          label="شناسه کاربر"
          {...methods.register('ClientId')}
          variant="filled"
        />
        <TextField
          error={false}
          label="ClientSecret"
          {...methods.register('ClientSecret')}
          variant="filled"
        />
      </div>
    </div>
  );
}

export default WorkFlowEngineFeatureSelectEnginsForm;
