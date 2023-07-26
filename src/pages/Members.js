import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';

function Members() {
  // Sample data for members (replace this with actual data from your backend or API)
  const members = [
    { id: 1, name: 'John Doe', role: 'Admin', avatar: 'avatar1.jpg' },
    { id: 2, name: 'Jane Smith', role: 'Member', avatar: 'avatar2.jpg' },
    { id: 3, name: 'Kerin Doe', role: 'Admin', avatar: 'avatar1.jpg' },
    { id: 4, name: 'Pavin Kan', role: 'Member', avatar: 'avatar2.jpg' },
    { id: 5, name: 'Kerin Doe', role: 'Admin', avatar: 'avatar1.jpg' },
    { id: 6, name: 'Pavin Kan', role: 'Member', avatar: 'avatar2.jpg' },
    // Add more members here
  ];

  return (
  <>
    <h2>Members</h2>
        <Grid container spacing={2}>
          {members.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card>
                <CardContent>
                  <Avatar src={member.avatar} alt={member.name} />
                  <Typography variant="h5">{member.name}</Typography>
                  <Typography variant="subtitle1">{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    
  );
}

export default Members;
