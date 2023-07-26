import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";

function ContactUs() {
  return (
    <>
      <Box className="contactus">
        <h2>Contact US</h2>
        <a
          target="_blank"
          href="https://www.facebook.com/RMSCMudhol/"
          className="facebook social"
        >
          <FacebookIcon color="secondary" size="2x" />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/raja_malojirao_sports_club"
          className="instagram social"
        >
          <InstagramIcon color="secondary" size="2x" />
        </a>
        <p>
          For more queries contact: <b>malojiraosportsclub@gmail.com</b>
        </p>
      </Box>
    </>
  );
}

export default ContactUs;
