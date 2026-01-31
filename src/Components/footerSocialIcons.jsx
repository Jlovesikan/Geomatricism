import React from 'react'
import { Button } from '@mui/material'

export default function FooterSocialIcons(props) {
    const Icon=props.Icon;
  return (
<Button
sx={{
bgcolor: '#09316f',
width: 40,
height: 40,
minWidth: 0,          
borderRadius: '50%',   
border: '1px solid #ccc9c9',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
cursor: 'pointer',
color: '#fff',
transition: 'all 0.3s ease',

'&:hover': {
color: '#09316f',
bgcolor: '#fff',
transform: 'scale(1.1)',
},
}}
>
<Icon sx={{ fontSize: 20 }} />
</Button>
  )
}
