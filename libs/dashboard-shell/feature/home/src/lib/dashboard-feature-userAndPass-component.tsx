import * as React from 'react';
import { useState } from 'react';
import {
  TextField,
  IconButton,
  InputAdornment,
  CardMedia,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

export function DashboardFeatureUserAndPassComponent() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setShowPassword(!showPassword);
  };

  return (
    <div className=" flex flex-col items-center justify-center  w-full gap-4">
      {/* لوگو */}
      <div className="mb-6">
        <CardMedia
          component="img"
          image="/dashboard-shell/Companylogo.jpg"
          alt="لوگوی سیستم"
          // className="h-full w-full"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* فیلد نام کاربری */}
      <div className="w-[70%]">
        <TextField
          label="نام کاربری"
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: '#fafafa',
              transition: 'all 0.3s ease-in-out',
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4b6cb7',
                boxShadow: '0 0 6px rgba(75,108,183,0.4)',
              },
            },
          }}
        />
      </div>

      {/* فیلد رمز عبور */}
      <div className="w-[70%]">
        <TextField
          label="رمز عبور"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: '#fafafa',
              transition: 'all 0.3s ease-in-out',
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4b6cb7',
                boxShadow: '0 0 6px rgba(75,108,183,0.4)',
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="end">
                  <LockIcon className="mt-0" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>

      <div className="flex justify-between w-[70%] items-center mt-2 text-sm">
        <FormControlLabel
          control={<Checkbox sx={{ color: '#4b6cb7' }} />}
          label="مرا به خاطر بسپار"
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '0.9rem',
              color: '#333',
            },
          }}
        />
        <p className="text-[#4b6cb7] hover:underline cursor-pointer transition-all duration-300">
          فراموشی رمز عبور؟
        </p>
      </div>

      {/* دکمه ورود */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          width: '70%',
          // mt: 3,
          py: 1.5,
          borderRadius: '12px',
        }}
        onClick={() => navigate('/home')}
      >
        ورود
      </Button>
    </div>
  );
}
export default DashboardFeatureUserAndPassComponent;
