import * as React from 'react';
import {
  Box,
  CssBaseline,
  Card,
  Toolbar,
  Typography,
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { color, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { UserProfileMenu } from './components/UserProfileMenu';
import { NotificationMenu } from './components/NotificationMenu';
import DraftsIcon from '@mui/icons-material/Drafts';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsIcon from '@mui/icons-material/Settings';
import { valueFormatter } from './components/webUsageState';
import DashboardFeatureChartComponent from './dashboard-feature-chart-component';
import {
  OutlinedCard,
  OutlinedCardAutomation,
  OutlinedCardProcessMaker,
} from './dashboard-feature-cards-component';

const drawerWidth = 240;
const navItems = ['خانه', 'پرسنل', 'مرخصی‌ها', 'گزارشات', 'مدیریت'];

const COLORS = {
  background: '#bfdbfe',
  card: 'rgba(255,255,255,0.06)',
  text: '#F8FAFC',
  // primary: '#38BDF8',
  primary: '#38BDF8',
  // border: 'rgba(255,255,255,0.15)',
  border: 'black',
  glow: '#38BDF850',
};

export function DashboardFeatureHome() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [init, setInit] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const cards = [
    {
      title: 'کل نامه ها',
      value: 15,
      icon: (
        <div className="flex justify-center items-center w-[50px] h-[40px]  rounded-lg bg-gray-500">
          <PauseCircleIcon sx={{ color: 'white' }} />
        </div>
      ),
    },
    {
      title: 'نامه های خوانده نشده',
      value: 7,
      icon: (
        <div className="flex justify-center items-center w-[50px] h-[40px]  rounded-lg bg-green-500">
          <ManageSearchIcon sx={{ color: 'white' }} />
        </div>
      ),
    },
    {
      title: 'نامه های ارسال شده',
      value: 5,
      icon: (
        <div className="flex justify-center items-center w-[50px] h-[40px]  rounded-lg bg-blue-500">
          <AccountTreeIcon sx={{ color: 'white' }} />
        </div>
      ),
    },
    {
      title: 'نامه های در درست اقدام',
      value: 9,
      icon: (
        <div className="flex justify-center items-center w-[50px] h-[40px]  rounded-lg bg-yellow-500">
          <SettingsIcon sx={{ color: 'white' }} />
        </div>
      ),
    },

    {
      title: 'در دست اقدام',
      value: 12,
      icon: (
        <div className="flex justify-center items-center w-[50px] h-[40px]  rounded-lg bg-red-500">
          <AssignmentTurnedInOutlinedIcon
            sx={{ color: 'white' }}
            // className={'bg-red-500'}
          />
        </div>
      ),
    },

    {
      title: 'پیگیری',
      value: 34,
      icon: (
        <div className="flex justify-center items-center w-[50px] h-[40px]  rounded-lg bg-orange-500">
          <TrackChangesIcon sx={{ color: 'white' }} />
        </div>
      ),
    },
    {
      title: 'اختصاص نیافته ها',
      value: 3,
      icon: (
        <div className="flex justify-center items-center w-[50px] h-[40px]  rounded-lg bg-gray-500">
          <PersonOffIcon sx={{ color: 'white' }} />
        </div>
      ),
    },
    {
      title: 'متوقف شده ها',
      value: 4,
      icon: (
        <div className="flex justify-center items-center w-[50px] h-[40px]  rounded-lg bg-amber-500">
          <DraftsIcon sx={{ color: 'white' }} />
        </div>
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        background: COLORS.background,
        minHeight: '100vh',
        color: COLORS.text,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CssBaseline />

      {/* 🌌 پس‌زمینه متحرک */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              color: { value: ['#38BDF8', '#60A5FA', '#3B82F6'] },
              links: {
                color: '#38BDF8',
                distance: 200,
                enable: true,
                opacity: 3,
                width: 3,
              },
              move: { enable: true, speed: 0.4 },
              number: { value: 60, density: { enable: true, area: 900 } },
              opacity: { value: 0.4 },
              size: { value: { min: 1, max: 10 } },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
      )}

      {/* نوار بالا */}
      <AppBar
        component="nav"
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
        // sx={{
        //   bgcolor: 'rgba(15,23,42,0.7)',
        //   borderBottom: `1px solid ${COLORS.border}`,
        //   backdropFilter: 'blur(10px)',
        //   zIndex: 10,
        // }}
      >
        <Toolbar className="flex justify-between">
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: 'black' }}
          >
            کاربر گرامی کاربر ارشد به سیستم اتوماسیون اداری و مدیرت فرایند
            الکترومیزان اندیشه خوش آمدید
          </Typography>
          <Box className="flex gap-3 items-center">
            <NotificationMenu
              notifications={[
                {
                  id: '1',
                  title: 'درخواست جدید مرخصی',
                  message: 'کارمند احمدی یک مرخصی ثبت کرد',
                  time: '۲ دقیقه پیش',
                  isRead: false,
                  type: 'info',
                },
              ]}
            />
            <UserProfileMenu
              onLogout={() => console.log('Logout clicked')}
              onProfileClick={() => console.log('Profile clicked')}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: '#0f172a',
            color: COLORS.text,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 3, color: COLORS.primary }}>
            منوی اصلی
          </Typography>
          <Divider sx={{ borderColor: COLORS.border }} />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{ color: COLORS.text, textAlign: 'center' }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* محتوای اصلی */}
      <Box component="main" className="flex-1 flex flex-col relative px-20 ">
        <Toolbar />
        <Box className="flex flex-col gap-6 p-6 ">
          {/* کارت‌ها */}
          {/* <Box className="flex flex-wrap justify-center gap-6 mt-4"> */}
          <Box className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 + i * 0.05 }}
              >
                <Card
                  className="flex items-center justify-between p-6"
                  sx={{
                    borderRadius: '16px',
                    width: '100%',
                    height: 80,
                    background: 'white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      border: `1.5px solid ${COLORS.primary}`,
                      boxShadow: `0 0 25px ${COLORS.glow}`,
                      background: 'rgba(56,189,248,0.15)',
                    },
                  }}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <Typography variant="subtitle2">{item.title}</Typography>
                  </div>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.value}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>

          <Box className="flex justify-center align-center gap-10 mx-12 ">
            <OutlinedCard />
            <OutlinedCardProcessMaker />
            <OutlinedCardAutomation />
          </Box>

          {/* چارت‌ها */}
          <Box className="grid grid-cols-2 gap-8 ">
            {/* <div className="h-[40px] bg-yellow-500 "> reza</div>
            <div className="h-[40px] bg-blue-500  ">ali</div> */}
            <Card
              sx={{
                borderRadius: '20px',
                bgcolor: 'white',
                // border: `1px solid ${COLORS.border}`,
                // width: 460,
                height: 320,
                backdropFilter: 'blur(10px)',
              }}
              className="p-6"
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                امار کاربران من
              </Typography>
              <DashboardFeatureChartComponent />
            </Card>

            <Card
              sx={{
                borderRadius: '20px',
                bgcolor: 'white',
                // border: `1px solid ${COLORS.border}`,
                // width: 380,
                height: 320,
                backdropFilter: 'blur(10px)',
              }}
              className="p-6"
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                نوع درخواست‌ها
              </Typography>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 45, label: 'کارتابل' },
                      { id: 1, value: 30, label: 'پیش نویس های من' },
                      { id: 2, value: 15, label: 'پیگیری' },
                      { id: 3, value: 10, label: 'اختصاص نیافته ها' },
                      { id: 3, value: 10, label: 'متوقف  شده ها' },
                    ],

                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: 'gray',
                    },
                    valueFormatter,
                  },
                ]}
                // sx={{
                //   // 👇 این بخش *قطعاً* متن Legend رو سفید می‌کنه
                //   '& .MuiChartsLegend-root': {
                //     color: '#fff !important',
                //   },
                //   // 👇 برای اطمینان، رنگ نقاط دایره کنار متن هم سفید نشه
                //   '& .MuiChartsLegend-mark': {
                //     stroke: '#fff',
                //   },
                // }}
                height={200}
                width={300}
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardFeatureHome;
