import { TextField } from '@mui/material';
import { METHODS } from 'http';
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
          // slotProps={slotProsp}
        />
        <TextField
          error={false}
          label="نام سرور"
          {...methods.register('ServerName')}
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
        <TextField
          error={false}
          label="نام پایگاه داده"
          {...methods.register('DbName')}
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 m-2">
        <TextField
          error={false}
          label="نام کاربر پایگاه داده"
          {...methods.register('DbUserName')}
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
        <TextField
          error={false}
          label="رمز"
          {...methods.register('Password')}
          type="password"
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
        <TextField
          error={false}
          label="نوع موتور"
          // defaultValue={data?.app_pro_title}
          {...methods.register('EngineType')}
          variant="filled"
          // slotProps={slotProsp}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 m-2">
        <TextField
          error={false}
          label="ادرس فیزیکی پوشه برنامه"
          {...methods.register('PhisicalWebAddress')}
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
        <TextField
          error={false}
          label="ادرس وب  موتور"
          {...methods.register('WebAddress')}
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
        <TextField
          error={false}
          label="ادرس وب موتور شبکه داخلی"
          {...methods.register('LocalWebAddress')}
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <TextField
          error={false}
          label="شناسه کاربر"
          {...methods.register('ClientId')}
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
        <TextField
          error={false}
          label="ClientSecret"
          {...methods.register('ClientSecret')}
          // defaultValue={data?.app_pro_title}
          variant="filled"
          // slotProps={slotProsp}
        />
      </div>
    </div>
  );
}

export default WorkFlowEngineFeatureSelectEnginsForm;
