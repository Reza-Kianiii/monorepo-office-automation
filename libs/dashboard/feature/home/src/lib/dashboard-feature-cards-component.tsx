import { Card, Box, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export function DashboardFeatureCardsComponent() {
  return (
    <Card
      // className=" w-[350px] h-[140px] rounded-[5px] p-2  "

      sx={{
        // width: 250,
        height: 140,
        borderRadius: 4,
        padding: 2,
        background: 'linear-gradient(to right, #ffe3d3, #ffd6c2)',
        boxShadow: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* آیکون گوشه بالا چپ */}
      <Box
        sx={{
          backgroundColor: '#ff725e',
          width: 40,
          height: 40,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1,
        }}
      >
        <MailIcon sx={{ color: 'white' }} />
      </Box>

      {/* عنوان و مقدار */}
      <Typography variant="body2" fontWeight={600} color="text.secondary">
        Messages
      </Typography>
      <Typography variant="h4" fontWeight={700}>
        234
      </Typography>

      {/* درصد رشد */}
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          color: 'red',
          fontSize: 14,
        }}
      >
        <TrendingUpIcon sx={{ fontSize: 16 }} />
        +3.6%
      </Box>

      {/* گراف ساده به صورت SVG یا image یا خط سفارشی */}
    </Card>
  );
}

export default DashboardFeatureCardsComponent;

// <Box
//   sx={{
//     position: 'absolute',
//     bottom: 12,
//     right: 12,
//     width: 80,
//     height: 40,
//   }}
// >
//   {/* می‌تونی از chart واقعی هم استفاده کنی مثلاً با chart.js یا recharts */}
//   <svg
//     viewBox="0 0 100 40"
//     preserveAspectRatio="none"
//     width="100%"
//     height="100%"
//   >
//     <polyline
//       fill="none"
//       stroke="#990000"
//       strokeWidth="3"
//       points="0,30 20,20 40,25 60,15 80,22 100,10"
//     />
//   </svg>
{
  /* </Box> */
}
