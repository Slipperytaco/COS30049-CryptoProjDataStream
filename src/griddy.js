import React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
  }));
  
  export default function ResponsiveGrid() {
    return (
        <Grid container spacing={2}>
            {/*  */}
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Analytics01</Typography>
                <Typography>
                    The content that will be displayed here could be meta crypto analytics
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Analytics02</Typography>
                <Typography>
                    More analytics here - not sure what.
                    there needs to be a certain amount of shit in here 
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Interesting Account information or something</Typography>
                <Typography>
                    Balance: 
                    Profit an Loss: 
                    No. of transactions
                    etc
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">More Intersting information unsure what though</Typography>
                <Typography>
                    intersting content relative to the end user. 
                </Typography>
                </Paper>
            </Grid>

        </Grid>
    );
  }
  

 /*
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} lg={6} key={index}>
            <Item>{index + 1}</Item>
            </Grid>
        ))}
        </Grid>
      </Box>
 */
/* xs, extra-small: 0 - 600px
- sm, small: 600 - 900px
- md, medium: 900 - 1200px
- lg, large: 1200 - 1536px
- xl, extra-large: 1536 + px */