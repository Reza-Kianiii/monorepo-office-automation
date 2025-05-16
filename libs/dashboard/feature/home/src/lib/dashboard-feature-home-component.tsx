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

const settings = {
  width: 200,
  height: 200,
  value: 60,
};

const sample = [1, 10, 30, 50, 70, 90, 100];

const navItems = ['Home', 'About', 'Contact'];

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

export function DashboardFeatureHome() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        open={open}
      >
        <Toolbar
          style={{ backgroundColor: '#E2E8F0' }}
          // sx={{
          //   border: '1px solid blue',
          // }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" className="flex-1 flex flex-col p-3  ">
        <Toolbar />
        <div className=" flex-1 mx-24 justify-items-center ">
          <div className="grid grid-cols-4 w-full gap-4">
            <div className="col-span-3 grid grid-cols-3 gap-4 ">
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
              <DashboardFeatureCardsComponent
                icon={
                  <MailIcon
                    sx={{ color: '#4318FF', width: '32px', Height: '32px' }}
                  />
                }
              />
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-4">
              <DashboardFeatureCardsComponent
                icon={
                  <MailIcon
                    sx={{ color: '#4318FF', width: '32px', Height: '32px' }}
                  />
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-4 w-full mt-12 gap-4">
            <div className="col-span-2 grid grid-cols-2 gap-4 ">
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
          <div className="grid grid-cols-4 w-full mt-12 gap-4">
            <div className="col-span-3 grid grid-cols-3 gap-4 ">
              <Card
                className="col-span-3 h-[310px]  "
                style={{ borderRadius: '30px' }}
              >
                <DashboardFeatureGridComponent />
              </Card>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-4">
              <Card
                className="col-span-1 flex justify-center"
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
                  width={200}
                />
              </Card>
            </div>
          </div>
          {/* <div className=" grid grid-cols-4  mt-12 gap-4">
             <div className="col-span-3 grid grid-cols-3">
              <Card style={{ borderRadius: '30px' }}>
                <DashboardFeatureGridComponent />
              </Card>
            </div> 
            <div>
              <Card
                style={{ borderRadius: '30px' }}
                className="flex justify-center items-center"
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
                  height={200}
                  width={200}
                />
              </Card>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-4 ">
              <Card
                style={{ borderRadius: '30px' }}
                className="flex justify-center items-center"
              >
                <Gauge
                  {...settings}
                  cornerRadius="50%"
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 40,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: '#52b202',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: theme.palette.text.disabled,
                    },
                  })}
                />
              </Card>
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-4 ">
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
          </div> */}
        </div>
      </Box>
    </Box>
  );
}

export default DashboardFeatureHome;
