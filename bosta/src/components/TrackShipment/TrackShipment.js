import React, { useEffect, useState } from 'react';
import './TrackShipment.css';
import { Box, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TrackShipment = () => {
    const [hasSearched, setHasSearched] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState();
    const [content, setContent] = useState([]);
    const navigate = useNavigate();

    const handleTrackingNo = (e) => {
        setTrackingNumber(e.target.value);
        e.preventDefault();
    }

    const handleSearch = () => {
        setHasSearched(true);
        fetchShipment();
    }

    const fetchShipment = async () => {
        try {
            const res = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
            setContent(res?.data);
        } catch (error) {
            console.log(error);
            setContent(null);
        }
    };
        
    useEffect(() => {
        if (!hasSearched) return;

        if (content) {
            navigate("/trackingshipment", {
                state: {
                    trackNo: trackingNumber,
                },
            });
        } else {
            navigate("/noshipment", {
                state: {
                    trackNo: trackingNumber,
                },
            });
        }
    }, [content]);    

  return (
    <Box className="trackBox">
        <Box className="shipBox">
            <Typography className='shipText'>Track Your Shipment</Typography>
            <TextField id="outlined-basic" label="TrackingNo." variant="outlined" className='trackTextField shipField' onChange={handleTrackingNo}/>
            <button className='searchBtn trackSearch' onClick={handleSearch}><SearchIcon /></button>
        </Box>
    </Box>
  )
}

export default TrackShipment