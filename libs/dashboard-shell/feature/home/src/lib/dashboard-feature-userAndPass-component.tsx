import * as React from 'react';
import { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export function DashboardFeatureUserAndPassComponent() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setShowPassword(!showPassword);
  };
  return (
    <>
      <TextField
        label="نام کاربری"
        required
        focused
        placeholder="نام کاربری را وارد کنید"
        variant="outlined"
        className="w-[70%] "
        slotProps={{
          input: {
            startAdornment: <AccountCircleIcon className="w-5 ml-2" />,
          },
        }}
      />

      <TextField
        label="رمز عبور"
        required
        focused
        className="w-[70%] placeholder:text-sm placeholder:text-gray-400"
        placeholder="رمز عبور را وارد کنید"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        // sx={{
        //   input: { color: '#fff' },
        //   label: { color: '#fff' },
        // }}

        slotProps={{
          input: {
            startAdornment: <LockIcon className="w-5 ml-2" />,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? (
                    <Visibility className="w-5 " />
                  ) : (
                    <VisibilityOff className="w-5 " />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Button className="w-[70%]" variant="contained">
        ورود
      </Button>
    </>
  );
}

export default DashboardFeatureUserAndPassComponent;
