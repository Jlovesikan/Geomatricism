import  React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function DropDown(props) {

  return (
<Accordion
  disableGutters
  sx={{
    boxShadow: 'none',
    background: 'transparent',
    border: 'none',
    '&::after': {
      display: 'none',   // removes top border line
    },
    '&.Mui-expanded': {
      margin: 0,
    },
  }}
>
  <AccordionSummary
  component="div"
    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
    disableGutters
    sx={{
      background: '#e35e25',
      transition: 'background 0.3s ease',
      border: 'none',
      outline: 'none',

      '&::before': {
        display: 'none',
      },

      '&:hover': {
        background: '#09316f',
      },

      '&.Mui-focusVisible': {
        outline: 'none',
        background: '#e35e25', // prevent blue/gray focus bg
      },

      '&:active': {
        outline: 'none',
      },
    }}
  >
    <Typography sx={{ color: '#fff' }}>
      {props.question}
    </Typography>
  </AccordionSummary>

  <AccordionDetails
    sx={{
      background: 'transparent',
      color: '#565969',
      border: 'none',
    }}
  >
    <Typography sx={{ cursor: 'pointer' }}>
      {props.answer}
    </Typography>
  </AccordionDetails>
</Accordion>

   
  );
}
