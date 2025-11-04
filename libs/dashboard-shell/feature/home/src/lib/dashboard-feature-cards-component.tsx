import { Card, Box, Typography } from '@mui/material';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

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
      {/* <Typography
        className="flex justify-center"
        gutterBottom
        sx={{ color: 'text.secondary', fontSize: 14 }}
      >
        سمت های کاربر
      </Typography> */}
      <Typography variant="h5" component="div">
        {/* be{bull}nev{bull}o{bull}lent */}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        سمت های کاربر
      </Typography>
      <Typography variant="body2">
        کارشناس نرم افزار
        <br />
        سرپرست سخت افزار
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);

export function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }} className="bg-red-500">
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
