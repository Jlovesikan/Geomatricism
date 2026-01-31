import { Card, CardMedia, CardContent, Typography, Fade, Box } from "@mui/material";
import useScrollFade from './StyledComponents/Scroll';
import React from "react";

export default function ServiceCard(props) {
  const { ref, visible } = useScrollFade();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 1s ease-in-out',
      }}
    >
      <Fade in={visible} timeout={1000}>
        <Card
          sx={{
            maxWidth: {md:250,sm:300},
            background: 'none',
            borderRadius: 0,
            boxShadow: 'none',
          }}
        >
          <CardMedia
            sx={{ height: 180 }}
            image={props.image}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ color: '#09316f',
              mt: 2 ,
              textAlign: 'center',
            }}
            >
              {props.title}
            </Typography>

            <Typography variant="body2"  sx={{
              lineHeight:2,
              width: '100%',
              textAlign: 'center',
              color:"#565969",
            }}>
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
}
