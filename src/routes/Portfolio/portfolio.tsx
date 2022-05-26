import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import vodafone from "../../assets/vodafone.png";
import "./portfolio.css";
export default function Portfolio(): ReactElement {


  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return(
    <>   
    <div className={"portfolio"}>
    <h1 className={"h1"}>Portfolio</h1>

    <div className={"card-grid"}>
    <Grid container spacing={2} >
  <Grid item xs={6} md={4}>
    <Item className='grid-item'>
      
    <Card className={"cards"}  >
      <CardActionArea className='card' style={{  backgroundColor: "#2D2D2E"}}>
        <CardMedia id='card'
          component="img"
          height="140"
          image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
          alt="green iguana"
          
    
        />
        <CardContent >
          <Typography gutterBottom variant="h5" color="white" component="div">
            Lizard
          </Typography>
          <Typography  variant="body2" color="white" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Item>
  </Grid>
  <Grid item xs={6} md={4}>
  <Item className='grid-item'><Card  className={"boats"} >
      <CardActionArea className='card' style={{  }}>
        <CardMedia id='card'
          component="img"
          height="140"
          image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
          alt="green iguana"
          
    
        />
        <CardContent >
          <Typography gutterBottom variant="h5" color="white" component="div">
            Lizard
          </Typography>
          <Typography  variant="body2" color="white" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Item>
  </Grid>
  <Grid item xs={6} md={4}>
  <Item className='grid-item'><Card  className={"boats"} >
      <CardActionArea className='card' style={{  backgroundColor: "#000000"}}>
        <CardMedia id='card'
          component="img"
          height="140"
          image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
          alt="green iguana"
          
    
        />
        <CardContent >
          <Typography gutterBottom variant="h5" color="white" component="div">
            Lizard
          </Typography>
          <Typography  variant="body2" color="white" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Item>
  </Grid>
  
</Grid>
    
      </div>
      </div>
      </>
    
    );
}