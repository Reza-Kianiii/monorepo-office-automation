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
            background: { color: { value: 'transparent' } },
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
            zIndex: 0,
          }}
        />
      )}
      <Box className="w-[90vw] h-[90vh] bg-red-500 flex p-4">
        <div className="w-1/2 bg-blue-500 h-full"></div>
        <div className="w-1/2 bg-green-500 h-full"></div>
      </Box>
    </Box>
  );
}

export default DashboardFeatureLoginComponent;
