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
    </Box>
  );
}

export default DashboardFeatureLoginComponent;
