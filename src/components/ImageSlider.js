import React,{useContext} from 'react'

import {Box, Grid} from '@mui/material'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function LeftArrow() {
    const { scrollPrev } =
      useContext(VisibilityContext);
  
    return (
        <Grid display="flex" justifyContent="center" alignItems="center">
            <ArrowCircleLeftIcon onClick={() => scrollPrev()} style={{cursor:"pointer"}}>
        Left
      </ArrowCircleLeftIcon>
        </Grid>
    );
  }


  function RightArrow() {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
        <Grid display="flex" justifyContent="center" alignItems="center">
            <ArrowCircleRightIcon onClick={() => scrollNext()} style={{cursor:"pointer"}}>
        Right
      </ArrowCircleRightIcon>
        </Grid>
    );
  }


export const ImageSlider=({data}) => {

    const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

    return(<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((image) => {
            return(
                <Box itemId={image.id} style={{width:"910px",overflow:"hidden"}} key={image.id}>
                    <img alt="property" src={image.url} style={{height:"400px",width:"100%"}}/>
                </Box>
            )
        })}
    </ScrollMenu>)
}