import * as React from 'react';
import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import {
  Box,
  CssBaseline,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // 👈 آیکون‌های چشم از MUI
import DashboardFeatureUserAndPassComponent from './dashboard-feature-userAndPass-component';
import { CardMedia } from '@mui/material';
// import logo from './../../../../../../apps/dashboard-shell/src/assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg';

const drawerWidth = 240;
const navItems = ['خانه', 'پرسنل', 'مرخصی‌ها', 'گزارشات', 'مدیریت'];

const COLORS = {
  background: '#bfdbfe',
  card: 'rgba(255,255,255,0.06)',
  text: '#F8FAFC',
  primary: '#38BDF8',
  border: 'rgba(255,255,255,0.15)',
  glow: '#38BDF850',
};

export function DashboardFeatureLoginComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [init, setInit] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        background: COLORS.background,
        minHeight: '100vh',
        color: COLORS.text,
        position: 'relative',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CssBaseline />

      {/* 🌌 پس‌زمینه متحرک */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            // background: {
            //   color: { value: COLORS.background }, // 👈 این خط باعث میشه background رنگی باشه نه شفاف
            // },
            fpsLimit: 50,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: { value: ['#38BDF8', '#60A5FA', '#3B82F6'] },
              links: {
                color: '#38BDF8',
                distance: 300,
                enable: true,
                opacity: 1,
                width: 2,
              },
              move: { enable: true, speed: 1 },
              number: { value: 80, density: { enable: true, area: 900 } },
              opacity: { value: 2 },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: -1, // 👈 خیلی مهم
          }}
        />
      )}
      <Box
        className="w-[60vw] h-[60vh] flex p-4 rounded-2xl shadow-xl backdrop-blur-md"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
        }}
      >
        {/* بخش سمت چپ */}
        <Box className="w-1/2 h-full rounded-xl flex flex-col justify-center items-center gap-4 bg-white">
          <DashboardFeatureUserAndPassComponent />
        </Box>

        <Box
          className="w-1/2 h-full rounded-xl"
          sx={{
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <CardMedia
            component="img"
            // image={'/kelly-sikkema-lFtttcsx5Vk-unsplash.jpg'}
            // image="/eden-constantino-OXmym9cuaEY-unsplash.jpg"
            image="/dashboard-shell/carlos-muza-hpjSkU2UYSU-unsplash.jpg"
            alt="لوگوی سیستم"
            // className="h-full w-full"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              objectPosition: 'center',
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardFeatureLoginComponent;
