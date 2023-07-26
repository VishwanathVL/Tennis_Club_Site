import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardHeader, Avatar } from '@mui/material';

function Events() {
  // Sample data for events (replace this with actual data from your backend or API)
  const events = [
    { id: 1, title: 'Chess Competition', date: '9th and 10th Jan 2021', description: 'We organized Chess Tournament in association with @ardeolegacy and @myrafashions', avatar: 'event1.jpg' },
    { id: 2, title: 'Table Tennis Championship', date: '31st Oct 2021', description: 'We organized Table Tennis Tournament in association with @Kubsad_Hospital and @myrafashions', avatar: 'event2.jpg' },
    // Add more events here
  ];

  return (
    <>
     <h2>Events</h2>
        <Grid container spacing={2} className="events">
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card>
                <CardHeader
                  avatar={<Avatar src={event.avatar} alt={event.title} />}
                  title={event.title}
                  subheader={event.date}
                />
                <CardContent>
                  <Typography>{event.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
  );
}

export default Events;
