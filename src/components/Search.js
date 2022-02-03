import React,{useState, useEffect} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import {SearchFilters} from './SearchFilters';

import {Property} from './Property'

import NoResult from '../noresult.svg'

import { fetchApiAxios, baseUrl } from '../utils/fetchApiAxios';
import { FaceRetouchingOff } from '@mui/icons-material';

export const Search=() => {

    const [searchFilters, setSearchFilters]=useState(false)
    const [propertyList,setPropertyList]=useState([])

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const purpose = params.get('purpose') || 'for-rent';
    const rentFrequency=params.get('rentFrequency') || 'yearly'
    const minPrice=params.get('priceMin') || '0'
    const maxPrice=params.get('priceMax') || '1000000'
    const roomsMin=params.get('roomsMin') || '0'
    const bathsMin=params.get('bathsMin') || '0'
    const sort=params.get('sort') || 'price-desc'
    const areaMax=params.get('areaMax') || '35000'
    const locationExternalIDs=params.get('locationExternalIDs') || '5002'
    const categoryExternalID=params.get('categoryExternalID') || '4'

    useEffect(async () => {
        await fetchApiAxios(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`).
                        then((res) => {
                            console.log("Response is ",res)
                            setPropertyList(res?.hits)
                        })
    },[])

    return(<>
        <Box>
            <Grid style={{cursor:"pointer",background:"rgb(240,240,240)",padding:"10px",marginTop:"-46px"}} display="flex" justifyContent="center" alignItems="center"
            onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Typography style={{fontWeight:"700",fontSize:"20px"}}>Search Property By Filters</Typography>
                <FilterAltIcon />
            </Grid>
            {searchFilters && <SearchFilters />}
            
            <Typography style={{fontSize:"36px",fontWeight:"600",marginTop:"30px",marginBottom:"15px",textAlign:"center"}}>
                Properties {purpose}
            </Typography>
            <Grid display="flex" flexWrap="wrap" justifyContent="space-around">
                {
                    propertyList.length!=0 && propertyList.map((property) => <Property property={property} key={property.id} style={{marginTop:"30px"}}> </Property>)
                }
            </Grid>
            {
                propertyList.length===0 && (
                    <Grid justifyContent="center" alignItems="center" flexDirection="column" display="flex" style={{marginTop:"5px",marginBottom:"5px"}}>
                        <img src={NoResult}></img>
                        <Typography style={{fontSize:'24px',marginTop:"15px"}}>
                            No Results Found
                        </Typography>
                    </Grid>
                )
            }
        </Box>
    </>)
}