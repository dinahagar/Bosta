import React from 'react'
import { useLocation } from 'react-router-dom';
import './NoShipment.css';
import TrackShipment from '../../components/TrackShipment/TrackShipment';
import { Box, Typography } from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const NoSipment = () => {
    const location = useLocation();

  return (
    <Box>
        <TrackShipment />

        <Box className="npShipment">
            <Box className="shipNoBox">
                <Typography className='shipNo'>Shipment No. {location.state.trackNo}</Typography>
            </Box>

            <Box className="warningBox">
                <WarningRoundedIcon className="warningBoxIcon"/>
                <Typography className="warningBoxText">No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.</Typography>
            </Box>

            <Box className="noshipmentImage"/>
        </Box>
    </Box>
  )
}

export default NoSipment