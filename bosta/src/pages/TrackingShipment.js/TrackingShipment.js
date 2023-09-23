import React, { useEffect, useState } from 'react';
import './TrackingShipment.css';
import { Box, Divider, Grid, Paper, Stack, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import { formatDate, formatShipmentDate, formatShipmentTime } from '../../components/formateDate';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const TrackingShipment = () => {

  const location = useLocation();
  let content = location.state.content;
  let trackNo = location.state.trackNo;
  const [step, setStep] = useState();
  const [desc, setDesc] = useState();
  const [color, setColor] = useState();

  const steps = [
    'Ticket Created',
    'Package Received',
    'Out For Delivery',
    'Delivered',
  ];

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 7px)',
      right: 'calc(50% + 7px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: `${color}`,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: `${color}`,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 4,
      borderRadius: 1,
    }
  }));
  
  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    zIndex: 1,
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: `${color}`,
    }),
    '& svg': {
      zIndex: 1,
      fontSize: '2.5rem',
    },
    '& .QontoStepIcon-completedIcon': {
      color: `${color}`,
      zIndex: 1,
      fontSize: 20,
    },
  }));
  
  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <ReceiptRoundedIcon />,
      2: <PlaylistAddCheckCircleRoundedIcon />,
      3: <LocalShippingRoundedIcon />,
      4: <CheckBoxRoundedIcon />,
    };

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <CheckCircleRoundedIcon className="QontoStepIcon-completedIcon" />
        ) : content?.CurrentStatus?.state === 'DELIVERED' ? (
          <CheckBoxRoundedIcon className="QontoStepIcon-DeliveredIcon" />
        ) : (
          icons[String(props.icon)]
        )}
      </QontoStepIconRoot>
    );
  }

  useEffect(() => {
    if(content?.CurrentStatus?.state === 'DELIVERED') {
      setDesc('Shipment is delivered');
      setStep(4);
      setColor('#36b600');
    }else if(content?.CurrentStatus?.state === 'DELETED') {
      setDesc('Shipment is cancelled');
      setStep(2);
      setColor('#f40105');
    }else if(content?.CurrentStatus?.state === 'TICKET_CREATED') {
      setDesc('Shipment is created');
      setStep(1);
      setColor('#f9ba02');
    }else if(content?.CurrentStatus?.state === 'PACKAGE_RECEIVED') {
      setDesc('Shipment is received');
      setStep(2);
      setColor('#f9ba02');
    }else if(content?.CurrentStatus?.state === 'OUT_FOR_DELIVERY') {
      setDesc('Shipment is shipped');
      setStep(3);
      setColor('#f9ba02');
    }else if(content?.CurrentStatus?.state === 'DELIVERED_TO_SENDER') {
      setDesc('Shipment is returned');
      setStep(2);
      setColor('#f40105');
    }else if(content?.CurrentStatus?.state === 'CANCELLED') {
      setDesc('Shipment is cancelled');
      setStep(3);
      setColor('#f40105');
    }
  }, [desc, step, color])

  return (
    <>
      <Box className="shipmentStateBox">
        <Box sx={{ flexGrow: 1 }} className="shipmentDetails">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography className='shipTitle'>Sipment No {trackNo}</Typography>
                <Typography className='shipStateDetails'>{desc}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className='shipTitle'>Last Update</Typography>
              <Typography className='shipDetails'>{formatDate(content?.CurrentStatus?.timestamp)}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className='shipTitle'>Seller Name</Typography>
              <Typography className='shipDetails'>SOUQ.COM</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className='shipTitle'>Delivery Time</Typography>
              <Typography className='shipDetails'>{formatDate(content?.PromisedDate)}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ width: '100%' }} />

        <Box sx={{ width: '100%', padding: '20px 30px' }}>
          <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon} >{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Box>
      </Box>

      <Box>
        <Box sx={{ flexGrow: 1 }} className="shipmentDetails">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8}>
                <Typography className='tableTitle'>Shipment Details</Typography>
                <Box className="shipmentTable">
                  <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={2} className='tableColumn'>
                      <Typography className='tableHead'>Location</Typography>
                      {[...Array(13)].map(() => <Typography>Nasr City</Typography>)}
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className='tableColumn'>
                      <Typography className='tableHead'>Date</Typography>
                      {content.TransitEvents.map(ship => (
                        <Typography>{formatShipmentDate(ship.timestamp)}</Typography>
                      ))}
                    </Grid>
                    <Grid item xs={4} sm={6} md={3} className='tableColumn'>
                      <Typography className='tableHead'>Time</Typography>
                      {content.TransitEvents.map(ship => (
                        <Typography>{formatShipmentTime(ship.timestamp)}</Typography>
                      ))}
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} className='tableColumn'>
                      <Typography className='tableHead'>Details</Typography>
                      {content.TransitEvents.map(ship => (
                        <Typography className='lastTableHead'>{ship.state}</Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Typography>Delivery Address</Typography>
                <Box>
                  <Typography>Imbaba, Talaat Harb Street, Al-Ummal City, next to the Prince, House 17, Block 33, Cairo</Typography>
                </Box>
                <Box>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={9} md={9}>
                    <Box>
                      <Typography>Is there a problem with your shipment?</Typography>
                      <button>Report an issue</button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={3} md={3}>
                    <QuestionMarkIcon />
                  </Grid>
                </Grid>
                </Box>
              </Grid>
            </Grid>
        </Box>
      </Box>
    </>
  )
}

export default TrackingShipment