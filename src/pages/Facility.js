import {  Card, CardContent,Box } from '@mui/material';
function Facility() {
    return (
      <>
      <Box className="facility">
       <h2>Outdoor Facilities</h2>
       <Card>
          <CardContent>
            <h3>Tennis Court</h3>
            <p>We have two clay tennis courts where you can enjoy playing tennis with your friends and family.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <h3>Swimming Pool</h3>
            <p>Cool off and relax in our outdoor swimming pool, perfect for both recreational swimming and training.</p>
            <b>Work in Progress, Expected functional in 2025</b>
          </CardContent>
        </Card>

          <h2>Indoor Facilities</h2>
          <Card>
          <CardContent>
            <h3>Table Tennis</h3>
            <p>Our indoor Table Tennis courts are perfect for TT enthusiasts of all skill levels.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3>Billiards</h3>
            <p>Our indoor Billiards are perfect for Billiards enthusiasts of all skill levels.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3>Chess</h3>
            <p>Our indoor chess are perfect for chess enthusiasts of all skill levels.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3>Carrom</h3>
            <p>Our indoor Carrom are perfect for Carrom enthusiasts of all skill levels.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3>Gym</h3>
            <p>Our indoor Gym are perfect for Gym enthusiasts of all skill levels.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3>Badminton</h3>
            <p>Our indoor badminton are perfect for badminton enthusiasts of all skill levels.</p>
            <b>Work in Progress, Expected functional in 2025</b>
          </CardContent>
        </Card>
       
       </Box>
       
       
       
      </>
    );
  }
  
  export default Facility;