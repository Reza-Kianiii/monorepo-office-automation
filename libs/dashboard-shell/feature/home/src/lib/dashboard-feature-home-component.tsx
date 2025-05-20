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
import Button from '@mui/material/Button';
import DashboardFeatureCardsComponent from './dashboard-feature-cards-component';
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webusagestatechart';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from '@mui/material/Card';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { LineChart } from '@mui/x-charts/LineChart';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardFeatureGridComponent from './dashboard-feature-grid-component';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

const settings = {
  width: 200,
  height: 200,
  value: 60,
};

const sample = [1, 10, 30, 50, 70, 90, 100];

const navItems = ['Home', 'About', 'Contact'];

export function DashboardFeatureHome() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
          </Box>
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
        <Toolbar />
        <div className=" flex-1 lg:mx-24 justify-items-center ">
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
