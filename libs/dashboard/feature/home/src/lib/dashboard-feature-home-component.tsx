import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
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
// import { desktopOS, valueFormatter } from './webUsageStats';

// const drawerWidth = 100;
const navItems = ['Home', 'About', 'Contact'];

export function DashboardFeatureHome() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" className="flex-1 flex flex-col p-3  ">
        <Toolbar />
        <div className=" flex-1 mx-24 justify-items-center ">
          <div className="grid grid-cols-4 w-full gap-4">
            <div className="col-span-3 grid grid-cols-3 gap-4 ">
              <DashboardFeatureCardsComponent />
              <DashboardFeatureCardsComponent />
              <DashboardFeatureCardsComponent />
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-4">
              <DashboardFeatureCardsComponent />
            </div>
          </div>
          <div className="grid grid-cols-4 w-full mt-12 gap-4">
            <div className="col-span-1 grid grid-cols-1 gap-4 ">
              <Card style={{ borderRadius: '30px' }}>
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
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <Card className="col-span-3">
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

        {/* <div className="bg-gray-500 flex-1 ">
          <div className="grid grid-cols-4 justify-items-center ">
            <DashboardFeatureCardsComponent />
            <DashboardFeatureCardsComponent />
            <DashboardFeatureCardsComponent />
            <DashboardFeatureCardsComponent />
          </div>
          <div className=" grid grid-cols-4">
            <Card className="col-span-1">
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

            <Card className="col-span-3">
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
        </div> */}
      </Box>
    </Box>
  );
}

export default DashboardFeatureHome;
