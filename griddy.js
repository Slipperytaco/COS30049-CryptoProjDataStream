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
                <Typography variant="h6">Content for Small (SM) and above</Typography>
                <Typography>
                    This is the content that will be displayed when the screen size is small (SM) and above.
                    The columns will fit side by side as the screen size increases.
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Another Column for Small (SM) and above</Typography>
                <Typography>
                    This is another column's content. It will also fit side by side with the previous column.
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Another Column for Small (SM) and above</Typography>
                <Typography>
                    This is another column's content. It will also fit side by side with the previous column.
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Another Column for Small (SM) and above</Typography>
                <Typography>
                    This is another column's content. It will also fit side by side with the previous column.
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Another Column for Small (SM) and above</Typography>
                <Typography>
                    This is another column's content. It will also fit side by side with the previous column.
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Another Column for Small (SM) and above</Typography>
                <Typography>
                    This is another column's content. It will also fit side by side with the previous column.
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