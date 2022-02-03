import React from 'react'

import {Box, Grid, Typography} from '@mui/material'

import { useParams } from 'react-router-dom'
import { useGetPropertyQuery } from '../service/fetchApi'

import { ImageSlider } from './ImageSlider'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import millify from 'millify'

export const SingleProperty=() => {
    const {id}=useParams()

    const {data,isFetching}=useGetPropertyQuery(id)

    if(isFetching) return 'Loading...'
    console.log(data)

    const {
        price,
        rentFrequency,
        rooms,
        title,
        baths,
        area,
        agency,
        isVerified,
        description,
        type,
        purpose,
        furnishingStatus,
        amenities,
        photos
    }=data

    return(<>
    <Box style={{maxWidth:"1000px",margin:"auto",padding:"4rem"}}>
        {photos && <ImageSlider data={photos} />}
        <Box style={{width:"100%",paddingTop:"30px",paddingBottom:"15px"}}>
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
                        {title}
                    </Typography>
                    <Typography style={{marginTop:"10px",color:"rgb(125,125,125)"}}>
                        {description}
                    </Typography>
                    <Grid display="flex" flexWrap="wrap" justifyContent="space-between" style={{width:"100%",marginTop:"30px"}}>
                        <Grid display="flex" justifyContent="space-between" style={{width:"40%",borderBottom:"1px solid #dcdcdc",paddingBottom:"15px"}}>
                            <Typography variant="body1">
                            TYPE
                            </Typography>
                            <Typography variant="body1" style={{fontWeight:"700",textTransform:"uppercase"}}>
                                {type}
                            </Typography>
                        </Grid>
                        <Grid display="flex" justifyContent="space-between" style={{width:"40%",borderBottom:"1px solid #dcdcdc",paddingBottom:"15px"}}>
                            <Typography variant="body1">
                            PURPOSE
                            </Typography>
                            <Typography variant="body1" style={{fontWeight:"700",textTransform:"uppercase"}}>
                                {purpose}
                            </Typography>
                        </Grid>
                        {
                            furnishingStatus && (
                                <Grid display="flex" justifyContent="space-between" style={{width:"40%",borderBottom:"1px solid #dcdcdc",paddingBottom:"15px",paddingTop:"15px"}}>
                                <Typography variant="body1">
                                    FURNISHING STATUS
                                </Typography>
                                <Typography variant="body1" style={{fontWeight:"700",textTransform:"uppercase"}}>
                                    {furnishingStatus}
                                </Typography>
                            </Grid>
                            )
                        }
                    </Grid>
                    <Typography variant="h5" style={{marginTop:"30px",fontWeight:"700",marginBottom:"10px"}}>
                    Facilites:
                    </Typography>
                    <Grid display="flex" justifyContent="space-between" flexWrap="wrap">
                        {
                            amenities.length!=0 && amenities?.map((fac,i) => {
                                return(
                                    <Typography key={i} style={{color:"#4299e1",background:"#e2e8f0",padding:"10px 10px",borderRadius:"4px",fontWeight:"700",marginBottom:"15px"}}>{fac.text}</Typography>
                                )
                            })
                        }
                    </Grid>
        </Box>
    </Box>
    </>)
}

