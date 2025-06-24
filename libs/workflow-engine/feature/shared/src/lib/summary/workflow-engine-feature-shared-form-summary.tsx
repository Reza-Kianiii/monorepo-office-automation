import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { TextField } from '@mui/material';

export function WorkFlowEngineFeatureSharedFormSummary({
  data,
}: {
  data: any;
}) {
  const slotProsp = useMemo(
    () => ({
      input: {
        readOnly: true,
      },
    }),
    []
  );

  return (
    <>
      <Box component={'form'} noValidate autoComplete="off">
        <div>
          <div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="عنوان کار"
                defaultValue={data?.app_pro_title}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="شناسه کار"
                defaultValue={data?.app_title}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="شماره"
                defaultValue={data?.app_number}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="وضعیت"
                defaultValue={data?.app_status}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="شناسه"
                defaultValue={data?.app_uid}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="ایحاد کننده"
                defaultValue={data?.usr_username}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="تاریخ ایجاد"
                defaultValue={data?.update_date}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="تاریخ اخرین ویرایش"
                defaultValue={data?.update_date}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="توضیحات"
                defaultValue={''}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="مرحله"
                defaultValue={data?.app_tas_title}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="کاربر تایید کننده"
                defaultValue={data?.app_currentuser}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="تاریخ اختصاص کار"
                defaultValue={data?.del_delegate_date}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
            <div className="grid grid-cols-3 p-3 gap-2">
              <TextField
                error={false}
                label="تاریخ انجام کار"
                defaultValue={data?.del_init_date}
                variant="filled"
                slotProps={slotProsp}
              />
              <TextField
                error={false}
                label="تاریخ سر رسید کار"
                defaultValue={data?.del_queue_duration}
                variant="filled"
                slotProps={slotProsp}
              />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default WorkFlowEngineFeatureSharedFormSummary;
