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
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { color, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { UserProfileMenu } from './components/UserProfileMenu';
import { NotificationMenu } from './components/NotificationMenu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DraftsIcon from '@mui/icons-material/Drafts';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsIcon from '@mui/icons-material/Settings';
import { desktopOS, valueFormatter } from './components/webUsageState';
import DashboardFeatureChartComponent from './dashboard-feature-chart-component';

const drawerWidth = 240;
const navItems = ['خانه', 'پرسنل', 'مرخصی‌ها', 'گزارشات', 'مدیریت'];

const COLORS = {
  background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
  card: 'rgba(255,255,255,0.06)',
  text: '#F8FAFC',
  primary: '#38BDF8',
  border: 'rgba(255,255,255,0.15)',
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
      title: 'کارتابل من',
      value: 12,
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
    { title: 'پیش نویس های من', value: 4, icon: <DraftsIcon /> },
    { title: 'پیگیری', value: 34, icon: <TrackChangesIcon /> },
    {
      title: 'اختصاص نیافته ها',
      value: 3,
      icon: <PersonOffIcon />,
    },
    {
      title: 'متوقف شده ها',
      value: 15,
      icon: <PauseCircleIcon />,
    },
    { title: 'جستوجوی پیشرفته', value: 7, icon: <ManageSearchIcon /> },
    {
      title: 'فرایند ها',
      value: 5,
      icon: <AccountTreeIcon />,
    },
    { title: 'موتورها', value: 9, icon: <SettingsIcon /> },
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
                distance: 130,
                enable: true,
                opacity: 0.2,
                width: 1.2,
              },
              move: { enable: true, speed: 0.4 },
              number: { value: 60, density: { enable: true, area: 900 } },
              opacity: { value: 0.4 },
              size: { value: { min: 1, max: 3 } },
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
            variant="h6"
            sx={{ fontWeight: 700, color: COLORS.primary }}
          >
            داشبورد اتوماسیون اداری
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
      <Box component="main" className="flex-1 flex flex-col relative p-4 z-10">
        <Toolbar />
        <Box className="flex flex-col gap-6 p-6">
          {/* کارت‌ها */}
          <Box className="flex flex-wrap justify-center gap-6 mt-4">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 + i * 0.05 }}
              >
                <Card
                  className="flex flex-col items-center justify-center p-6"
                  sx={{
                    borderRadius: '16px',
                    width: 230,
                    height: 130,
                    // background: COLORS.card,
                    background: 'transparent',
                    border: `1.5px solid ${COLORS.border}`,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      border: `1.5px solid ${COLORS.primary}`,
                      boxShadow: `0 0 25px ${COLORS.glow}`,
                      background: 'rgba(56,189,248,0.15)',
                    },
                  }}
                >
                  <Box className="text-3xl mb-2" sx={{ color: COLORS.primary }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: '#E2E8F0' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: COLORS.primary }}
                  >
                    {item.value}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* چارت‌ها */}
          <Box className="flex flex-wrap justify-center gap-8 mt-10">
            <Card
              sx={{
                borderRadius: '20px',
                bgcolor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                // width: 460,
                height: 320,
                backdropFilter: 'blur(10px)',
              }}
              className="p-6"
            >
              <Typography variant="h6" sx={{ mb: 2, color: '#E2E8F0' }}>
                امار کاربران من
              </Typography>
              <DashboardFeatureChartComponent />
            </Card>

            <Card
              sx={{
                borderRadius: '20px',
                bgcolor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                // width: 380,
                height: 320,
                backdropFilter: 'blur(10px)',
              }}
              className="p-6"
            >
              <Typography variant="h6" sx={{ mb: 2, color: '#E2E8F0' }}>
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
                sx={{
                  // 👇 این بخش *قطعاً* متن Legend رو سفید می‌کنه
                  '& .MuiChartsLegend-root': {
                    color: '#fff !important',
                  },
                  // 👇 برای اطمینان، رنگ نقاط دایره کنار متن هم سفید نشه
                  '& .MuiChartsLegend-mark': {
                    stroke: '#fff',
                  },
                }}
                height={200}
                width={200}
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardFeatureHome;
