import { Box, Divider, Grid, Slide } from "@mui/material";
import * as React from "react";
import TabBar from "../tab/TabBar";
import ContactUs from "../contactus/ContactUs";
import Header from "../header/Header";
import SimpleImage from "./SimpleImage";

export default function Home() {
  const [showContactUs, setShowContactUs] = React.useState(false);
  const contactUsRef = React.useRef(null); // Ref to track the ContactUs component

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
         
          if (entry.isIntersecting) {
            setTimeout(() => {
              setShowContactUs(true);
              observer.disconnect(); // Disconnect after animation starts
            }, 1000);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (contactUsRef.current) {
      observer.observe(contactUsRef.current);
    }

    return () => {
      if (observer && observer.disconnect) observer.disconnect();
    };
  }, []);

  return (
    <Box>
      {/* <Navbar /> */}
      <Header />
      <TabBar />
      <Grid container sx={{ marginTop: { md: 10, xs: 2 } }}>
        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent="center"
          alignItems="center"
        >
          <SimpleImage />
        </Grid>
        <Grid item xs={12} md={6}>
          <div ref={contactUsRef}> {/* Use a div or Box for ref to work properly */}
            <Slide direction="up" in={showContactUs} mountOnEnter unmountOnExit timeout={1000}>
              <Box>
                <ContactUs />
              </Box>
            </Slide>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ my: 10, backgroundColor: "black" }} />
    </Box>
  );
}
