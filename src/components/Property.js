import React from 'react'
import {Link} from 'react-router-dom'

import { Grid, Box, Typography } from '@mui/material'
import House from '../house.jpeg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import millify from 'millify'

export const Property=({property}) => {

    const {
        coverPhoto,
        price,
        rentFrequency,
        rooms,
        title,
        baths,
        area,
        agency,
        isVerified,
        externalID
    }=property

    return(
    <>
        <Link to={`/property/${externalID}`} style={{textDecoration:"none",color:"unset",marginBottom:"30px"}}>
                <Box>
                    <img src={coverPhoto?coverPhoto.url:House} style={{width:"400px",height:"260px",marginBottom:"15px"}}></img>
                </Box>
                <Box>
                    <Grid container alignItems="center" justifyContent="space-between" style={{marginBottom:"10px"}}>
                        <Grid alignItems="center" display="flex" flexDirection="row" justifyContent="center">
                            <Box>{isVerified && <CheckCircleIcon style={{color:"#91db1c"}} />}</Box>
                            <Typography variant="body1" style={{marginLeft:"5px",fontWeight:"600"}}>AED {price}</Typography>
                        </Grid>
                        <Box>
                            <img src={agency?.logo?.url} style={{height:"30px"}}></img>
                        </Box>
                    </Grid>
                    <Grid alignItems="center" display="flex" style={{marginBottom:"15px"}}>
                        <Typography variant="body1" style={{color:"#0f9fe5"}}>{rooms}</Typography> <BedroomParentIcon style={{marginLeft:"10px",marginRight:"10px",color:"#0f9fe5"}} /> | &nbsp;&nbsp; <Typography variant="body1" style={{color:"#0f9fe5"}}>{baths}</Typography> <BathtubIcon style={{marginLeft:"10px",marginRight:"10px",color:"#0f9fe5"}} /> | &nbsp;&nbsp; <Typography variant="body1" style={{color:"#0f9fe5"}}>{millify(area)} sqft</Typography>  <ViewCompactIcon style={{marginLeft:"10px",marginRight:"10px",color:"#0f9fe5"}} />
                    </Grid>
                    <Typography variant="h6">
                        {title.length>30 ? `${title.substring(0,30)}...`:title}
                    </Typography>
                </Box>
        </Link>
    </>)
}