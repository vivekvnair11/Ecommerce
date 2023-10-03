import * as React from 'react';
import {useContext} from 'react'
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import { useCount } from '../../App';
import '../../App.css'



function Count() {
  const { count, setCount } = useCount();
  const [invisible, setInvisible] = React.useState(false);


  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };



  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="primary"    
        >
       
        </Badge>
        <ButtonGroup>
          <Button className='inc-dec'
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          > 
            <RemoveIcon fontSize="small" />
          </Button>
          <Button className='inc-dec'>{count}</Button>
          <Button className='inc-dec'
            aria-label="increase"
             onClick={() => {
            setCount(count + 1);
           }}
            
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    
    </Box>
  );
}

export default Count;