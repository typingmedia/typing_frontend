import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import logo from "../Image/logoCompany.png";
import "./About.css";
import icon1 from "./icon 1.png"
import icon2 from "./icon 2.png"
import icon3 from "./icon 3.png"
import icon4 from"./icon 4.png"

const About = () => {
  const [animated, setAnimated] = React.useState(false);

  React.useEffect(() => {
   
    setAnimated(true);
  }, []);
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        {/* Grid item for the logo */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={animated ? 'animate-slide-in-left' : ''}
        >
          <Box
            component="img"
            src={logo}
            alt="Company Logo"
            className="logo"
          />
        </Grid>

        {/* Grid item for the text content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column"
          }}
          className={animated ? 'animate-slide-in-left' : ''}
        >
          <Typography
            variant="h4"
            gutterBottom
            className="headerTypography"
            sx={{fontWeight:'bolder'}}
          >
            WELCOME TO
          </Typography>

          <Typography
            variant="h5"
            paragraph
            className="subHeaderTypography"
          >
            typing...
          </Typography>
          <Typography variant="body1">
            <Typography component="span" className="descriptionTypography"   sx={{fontWeight:'bolder'}}>
              Typing...
            </Typography>{" "}
            <span className="textDescription">
              is where your ideas come to life. We are committed to crafting
              content that connects, engages, and inspires. We specialize in
              creating tailored writing solutions for brands across all
              industries, ensuring every word reflects your vision and drives
              results. With creativity and strategic thinking, we help you
              communicate effectively and stand out.
            </span>
          </Typography>

          {/* Nested Grid for images and text */}
          <Grid container spacing={4} className="imageTextContainer" sx={{mt:1}}>
  {/* Image 1 */}
  <Grid item xs={6}>
    <Box className="imageTextItem">
      <Box
        component="img"
        src={icon1}
        alt="Image 1"
        className="squareImage"
      />
      <Typography variant="body2">
        <span className="textBeforeBr">3+ Years</span> <br /> Experience
      </Typography>
    </Box>
  </Grid>

  {/* Image 2 */}
  <Grid item xs={6}>
    <Box className="imageTextItem">
      <Box
        component="img"
        src={icon2}
        alt="Image 2"
        className="squareImage"
      />
      <Typography variant="body2">
        <span className="textBeforeBr">300+</span> <br /> Scripts
      </Typography>
    </Box>
  </Grid>

  {/* Image 3 */}
  <Grid item xs={6}>
    <Box className="imageTextItem">
      <Box
        component="img"
        src={icon3}
        alt="Image 3"
        className="squareImage"
      />
      <Typography variant="body2">
        <span className="textBeforeBr">100M+</span> <br /> Views Gained
      </Typography>
    </Box>
  </Grid>

  {/* Image 4 */}
  <Grid item xs={6}>
    <Box className="imageTextItem">
      <Box
        component="img"
        src={icon4}
        alt="Image 4"
        className="squareImage"
      />
      <Typography variant="body2">
        <span className="textBeforeBr">40+</span> <br /> Trusted Clients
      </Typography>
    </Box>
  </Grid>
</Grid>

        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
