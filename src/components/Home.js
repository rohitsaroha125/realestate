import React from 'react'
import {Grid, Box, Typography, Button} from '@mui/material'

import {Link} from 'react-router-dom'

import { useGetPropertyForSaleQuery, useGetPropertyForRentQuery } from '../service/fetchApi'

import { Property } from './Property'
import { Footer } from './Footer'

const Banner=({purpose, imageUrl, title1, title2, desc1, desc2, buttonText, linkName}) => {
    return(
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center" style={{marginBottom:"10px"}}>
            <img src={imageUrl} style={{width:"500px",height:"300",marginBottom:"30px",marginTop:"30px"}}></img>
            <Box sx={{p:2}}>
                <Typography variant='h6'>{purpose}</Typography> 
                <Typography variant='body1' style={{color:"rgb(175,175,175)",fontWeight:"bold",marginBottom:"15px"}}>{title1} <br /> {title2}</Typography>
                <Typography variant='body2' style={{color:"rgb(150,150,150)",fontWeight:"bold",marginBottom:"15px"}}>{desc1}<br />{desc2}</Typography>
                <Button variant="contained" style={{backgroundColor:"#E2E8F0"}}>
                    <Link to={linkName} style={{color:"#000",textDecoration:"none",fontSize:"17px",fontWeight:"700"}}>{buttonText}</Link>
                </Button>
            </Box>
        </Grid>
    )
}

export const Home=() => {

    const {data: saleData, isFetching: saleFetching}=useGetPropertyForSaleQuery()
    const {data: rentData, isFetching: rentFetching}=useGetPropertyForRentQuery()

    console.log(saleData)

    return(<div>
        <Banner purpose={'For Rent'} title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'></Banner>

    {
        saleFetching?
            'Loading...':
            <Grid container
                    display="flex"
                    direction="row"
                    justifyContent="center"
                    alignItems="center" item={true}
                    spacing={2}>
                {
                saleData?.hits.map((property) => {
                        return(
                            <Box xs={4} md={4} sm={6} sx={{p:2}}>
                                <Property property={property}></Property>
                            </Box>
                        )
                    })
                }
            </Grid>
    }

      <Banner purpose={'For Sale'} title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'></Banner>

    {
        rentFetching?
        'Loading...':
        <Grid container
                display="flex"
                direction="row"
                justifyContent="center"
                alignItems="center" item={true}>
            {
            rentData?.hits.map((property) => {
                    return(
                        <Box xs={4} md={4} sm={6} sx={{p:2}}>
                            <Property property={property}></Property>
                        </Box>
                    )
                })
            }
        </Grid>
    }
    </div>)
}