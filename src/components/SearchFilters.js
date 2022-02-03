import React,{useEffect,useState} from 'react'

import { Grid, Box, Typography, Select, InputLabel, Button, FormControl, MenuItem } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { filterData,getFilterValues } from '../utils/filterData';

import { useNavigate, createSearchParams } from 'react-router-dom';

export const SearchFilters=() => {

    const [filters,setFilters]=useState(filterData)

    let history = useNavigate();

    const searchProperty=(filterValues) => {
        const search = window.location.search;
        const params = new URLSearchParams(search);

        const values=getFilterValues(filterValues)

        // values.forEach((item) => {
        //     params.set(item.name,item.value)
        // })

        history({
            pathname:'/search',
            search: `${createSearchParams({
                foo:"bar"
            })}`
        })

    }

    return(<Grid style={{background:"rgb(240,240,240)",padding:"20px"}} display="flex" flexWrap="wrap" justifyContent="center">
        {
            filters.map((filter,i) => {
                return(
                    <Box key={filter.queryName}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id={`label${i}`}>{filter.placeholder}</InputLabel>
                        <Select labelId={`label${i}`} label={filter.placeholder} onChange={(e) => searchProperty({[filter.queryName]: e.target.value})}>
                            {
                                filter?.items?.map((item) => {
                                    return(
                                        <MenuItem value={item.value} key={item.value}>{item.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        </FormControl>
                    </Box>
                )
            })
        }
    </Grid>)
}