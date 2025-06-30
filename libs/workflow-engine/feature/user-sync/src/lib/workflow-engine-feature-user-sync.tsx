import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, ButtonProps, SvgIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useLazyGetUserSyncQuery } from '@office-automation/workflow-engine/data/data-user-sync';
export function WorkflowEngineFeatureUserSync() {
  const [userSync, setUserSync] = React.useState('');

  const [trigger, { isLoading }] = useLazyGetUserSyncQuery();

  const handleChange = (event: SelectChangeEvent) => {
    setUserSync(event.target.value);
  };

  const handleSubmit = () => {
    trigger().then((value) => {
      console.log(value, 'uiuqawerqwer');
    });
  };

  return (
    <div>
      <Box sx={{ maxWidth: 400, marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            نحوه به هنگام سازی
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userSync}
            label="نحوه به هنگام سازی"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              بروز رسانی کاربران کارتابل در پروسس میکر
            </MenuItem>
          </Select>
        </FormControl>
        <p className="mt-5">
          لطفا قبل از به هنگام سازی از پایگاه داده های برنامه نسخه پشتیبان تهیه
          گردد
        </p>
      </Box>
      <Button
        onClick={handleSubmit}
        style={{ marginTop: '10px' }}
        variant="contained"
        color="primary"
      >
        {'تایید'}
      </Button>
    </div>
  );
}
