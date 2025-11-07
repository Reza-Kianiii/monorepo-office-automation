import { Card, Box, Typography, CardMedia } from '@mui/material';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import EmailIcon from '@mui/icons-material/Email';

import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router-dom';

export function DashboardFeatureCardsComponent({ icon }: { icon: any }) {
  return (
    <Card
      // className=" w-[350px] h-[140px] rounded-[5px] p-2  "

      sx={{
        // width: 250,
        // height: 140,
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0px',
        borderRadius: '20px',
        padding: '15px 20px',
        // background: 'linear-gradient(to right, #ffe3d3, #ffd6c2)',
        // boxShadow: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* آیکون گوشه بالا چپ */}
      <div className="flex  items-center  justify-between mt-auto mb-auto">
        <Box
          sx={{
            display: 'flex',
            borderRadius: '50%',
            backgroundColor: '#E2E8F0',
            width: '56px',
            height: '56px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </Box>
        <div>
          <Typography variant="body2" fontWeight={600} color="text.secondary">
            Messages
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            234
          </Typography>
        </div>
      </div>
    </Card>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <p style={{ textAlign: 'center' }}>
        <GroupsIcon
          sx={{
            color: 'text.secondary',
            mr: 1,
            fontSize: '50px',
          }}
        />
      </p>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        سمت های کاربر
      </Typography>
      <Typography variant="body2">
        کارشناس نرم افزار
        <br />
        سرپرست سخت افزار
      </Typography>
    </CardContent>
  </React.Fragment>
);

export function OutlinedCard() {
  return (
    <Box sx={{ width: '100%' }}>
      <Card
        variant="outlined"
        style={{
          borderRadius: '30px',
          boxShadow:
            '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 15px 40px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {card}
      </Card>
    </Box>
  );
}

const cardProssMaker = (
  <React.Fragment>
    <CardContent>
      <p style={{ textAlign: 'center' }}>
        <AccountTreeIcon
          sx={{
            color: 'text.secondary',
            mr: 1,
            fontSize: '50px',
          }}
        />
      </p>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        مدیرت فرایند ها
      </Typography>
    </CardContent>
  </React.Fragment>
);

export function OutlinedCardProcessMaker() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ width: '100%', cursor: 'pointer' }}
      onClick={() => (window.location.href = '/workflow-engine/inbox')}
    >
      <Card
        variant="outlined"
        style={{
          height: '100%',
          borderRadius: '30px',
          boxShadow:
            '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 15px 40px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {cardProssMaker}
      </Card>
    </Box>
  );
}

const cardAutomation = (
  <React.Fragment>
    <CardContent>
      <p style={{ textAlign: 'center' }}>
        <EmailIcon
          sx={{
            color: 'text.secondary',
            mr: 1,
            fontSize: '50px',
          }}
        />
      </p>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        اتوماسیون
      </Typography>
    </CardContent>
  </React.Fragment>
);

export function OutlinedCardAutomation() {
  return (
    <Box
      sx={{ width: '100%', cursor: 'pointer' }}
      onClick={() => (window.location.href = '/workflow-engine/inbox')}
    >
      <Card
        variant="outlined"
        style={{
          height: '100%',
          borderRadius: '30px',
          boxShadow:
            '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 15px 40px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {cardAutomation}
      </Card>
    </Box>
  );
}
