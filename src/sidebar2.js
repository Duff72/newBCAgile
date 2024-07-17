// Sidebar2.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Sidebar2 = ({ trendingTags }) => {
  return (
    <Box className="sidebar" p={3} borderRadius={2} textAlign="left" sx={{ bgcolor: '#1e2a38', color: 'white', height: '100vh', overflowY: 'auto' }}>
      <Typography variant="h6" mb={2}>
        Trend for you
      </Typography>
      <Divider sx={{ bgcolor: 'grey.700' }} />
      <List>
        {trendingTags.map((tag, index) => (
          <Box key={index} mt={2}>
            <ListItem disableGutters>
              <ListItemText primary={`#${tag}`} primaryTypographyProps={{ sx: { color: 'white' } }} />
            </ListItem>
            {index < trendingTags.length - 1 && <Divider sx={{ bgcolor: 'grey.700' }} />}
          </Box>
        ))}
      </List>
      <Typography variant="body2" sx={{ color: 'blue', mt: 2 }}>
        Show More
      </Typography>
    </Box>
  );
};

export default Sidebar2;
