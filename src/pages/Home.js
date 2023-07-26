import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Events from "./Events";
import ContactUs from "./ContactUs";
import Members from "./Members";
import Legacy from "./Legacy";
import Facility from "./Facility";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" >
        <Box className="section-container">
      <Routes>
        <Route path="/" element={<Legacy />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
      </Box>
      </Container>
    </>
  );
}

export default Home;
