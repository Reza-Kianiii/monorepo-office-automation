import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webusagestatechart';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from '@mui/material/Card';
import { LineChart } from '@mui/x-charts/LineChart';
import DashboardFeatureCardsComponent from './dashboard-feature-cards-component';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import DashboardFeatureGridComponent from './dashboard-feature-grid-component';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import { UserProfileMenu } from './components/UserProfileMenu';
import { NotificationMenu } from './components/NotificationMenu';
import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const drawerWidth = 240;

// removed unused DashboardFeatureCardsComponent import and settings helper

const sample = [1, 10, 30, 50, 70, 90, 100];

const navItems = ['Home', 'About', 'Contact'];

export function DashboardFeatureHome() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // State for mobile drawer

  // Any future state management can be added here

  // Any future state management can be added here

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Use MUI props to make AppBar transparent and remove shadow */}
      <AppBar
        component="nav"
        color="transparent"
        elevation={0}
        sx={{ bgcolor: 'transparent' }}
      >
        <Toolbar className="flex justify-between">
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}

          <NotificationMenu
            notifications={[
              {
                id: '1',
                title: 'درخواست مرخصی جدید',
                message: 'علی محمدی درخواست مرخصی ثبت کرده است',
                time: '۵ دقیقه پیش',
                isRead: false,
                type: 'info',
              },
              {
                id: '2',
                title: 'تایید درخواست',
                message: 'درخواست شماره ۱۲۳ تایید شد',
                time: '۱ ساعت پیش',
                isRead: true,
                type: 'success',
              },
              {
                id: '3',
                title: 'هشدار سیستم',
                message: 'لطفا گزارش هفتگی خود را ثبت کنید',
                time: '۲ ساعت پیش',
                isRead: false,
                type: 'warning',
              },
            ]}
            onNotificationClick={(id) => {
              console.log('Notification clicked:', id);
            }}
            onMarkAllRead={() => {
              console.log('Mark all as read');
            }}
            onClearAll={() => {
              console.log('Clear all notifications');
            }}
          />

          <UserProfileMenu
            onLogout={() => {
              // Handle logout
              console.log('Logout clicked');
            }}
            onProfileClick={() => {
              // Handle profile click
              console.log('Profile clicked');
            }}
          />

          {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
          {/* </Box> */}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" className="flex-1 flex flex-col p-3  ">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: '#3b3e46ff',
                },
              },
              fpsLimit: 3000,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    // mode: '',
                  },
                  onHover: {
                    enable: false,
                    // mode: 'repulse',
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 0,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: '#ffffff',
                },
                links: {
                  color: '#ffffff',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                    default: 'bounce',
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}

        <Toolbar />
        <div className=" flex-1 lg:mx-24 justify-items-center  ">
          <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
            <div className="col-span-1 sm:col-span-2    grid grid-cols-1  sm:grid-cols-2   gap-4 ">
              <DashboardFeatureCardsComponent
                icon={
                  <MailIcon
                    sx={{ color: '#4318FF', width: '32px', Height: '32px' }}
                  />
                }
              />
              <DashboardFeatureCardsComponent
                icon={
                  <PersonIcon
                    sx={{ color: '#4318FF', width: '32px', Height: '32px' }}
                  />
                }
              />
            </div>
            <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DashboardFeatureCardsComponent
                icon={
                  <MailIcon
                    sx={{ color: '#4318FF', width: '32px', Height: '32px' }}
                  />
                }
              />
              <DashboardFeatureCardsComponent
                icon={
                  <MailIcon
                    sx={{ color: '#4318FF', width: '32px', Height: '32px' }}
                  />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-4 w-full mt-12 gap-4">
            <div className="grid  col-span-1 md:col-span-3">
              <Card className="col-span-3 " style={{ borderRadius: '30px' }}>
                <DashboardFeatureGridComponent />
              </Card>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-4">
              <Card
                className="col-span-1 flex justify-center  w-full"
                style={{ borderRadius: '30px' }}
              >
                <PieChart
                  series={[
                    {
                      data: desktopOS,
                      highlightScope: { fade: 'global', highlight: 'item' },
                      faded: {
                        innerRadius: 30,
                        additionalRadius: -30,
                        color: 'gray',
                      },
                      valueFormatter,
                    },
                  ]}
                  hideLegend
                  height={200}
                  // width={200}
                />
              </Card>
            </div>
          </div>

          <div className="grid  grid-cols-1  md:grid-cols-4 w-full mt-12 gap-4">
            <div className="col-span-2  grid grid-cols-2  gap-4 ">
              <Card
                className="col-span-3 h-[310px]  "
                style={{ borderRadius: '30px' }}
              >
                <LineChart
                  xAxis={[{ data: sample }]}
                  yAxis={[
                    { id: 'linearAxis', scaleType: 'linear', position: 'left' },
                    { id: 'logAxis', scaleType: 'log', position: 'right' },
                  ]}
                  series={[
                    { yAxisId: 'linearAxis', data: sample, label: 'linear' },
                    { yAxisId: 'logAxis', data: sample, label: 'log' },
                  ]}
                  height={300}
                  // width={1000}
                />
              </Card>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <Card className="col-span-3" style={{ borderRadius: '30px' }}>
                <BarChart
                  xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                  series={[
                    { data: [4, 3, 5] },
                    { data: [1, 6, 3] },
                    { data: [2, 5, 6] },
                  ]}
                  height={300}
                />
              </Card>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default DashboardFeatureHome;
