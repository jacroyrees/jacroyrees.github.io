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
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return(
    <>   
    <div className={"portfolio"}>
    <h1 className={"h1"}>Portfolio</h1>
    </div>
    <div className={"cards"}>
    
  <Item><Card  className={"card"} >
      <CardActionArea className='card' style={{  backgroundColor: "#121212"}}>
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
    <Item><Card  className={"card"} >
      <CardActionArea className='card' style={{  backgroundColor: "#121212"}}>
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
    <Item><Card  className={"card"} >
      <CardActionArea className='card' style={{  backgroundColor: "#121212"}}>
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
    <Item><Card  className={"card"} >
      <CardActionArea className='card' style={{  backgroundColor: "#121212"}}>
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
    
    <Item><Card  className={"card"} >
      <CardActionArea className='card' style={{  backgroundColor: "#121212"}}>
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
    
    <Item><Card  className={"card"} >
      <CardActionArea className='card' style={{  backgroundColor: "#121212"}}>
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
    
   
    
    
    
    
    
    </div>


      

    

      </>
    
    );
}