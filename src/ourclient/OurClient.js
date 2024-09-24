import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material"; 
import "./OurClient.css";
import CardGrid from "../components/CardGrid";
import tata from "./tata2.png";
import fortis from "./fortis.png";
import itc from "./itc3.png";
import allensolly from "./AllenSollymain.png";
import sony from "./sony.png";
import tvs from "./TVs.png";
import policybazaar from "./logoPolicy.svg";
import casio from "./Casionew.png"
import ballentine from "./ballentinenew.png"


const OurClient = () => {
  const [animated, setAnimated] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3); 
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const cards = [
    sony,
    casio,
    itc,
    tata,
    tvs,
    fortis,
    policybazaar,
    allensolly,
    ballentine
 
  ];

  useEffect(() => {
    setAnimated(true);
  }, []);

  const loadMoreCards = () => {
    setVisibleCards((prev) => Math.min(prev + 3, cards.length)); 
  };

  const handleLoadLess = () => {
    setVisibleCards((prev) => Math.max(prev - 3, 3)); 
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        width: "100%", 
        overflowX: "hidden", 
      }}
      className="client-container"
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          maxWidth: "100%", 
          width: "100%", 
          maxWidth: "900px",
          margin: "0 auto",
          boxSizing: "border-box",
          paddingBottom: '4px',
          
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {cards
            .slice(0, isSmallScreen ? visibleCards : cards.length)
            .map((image, index) => (
              <Grid
                item
                xs={12} 
                sm={6}
                md={4}
                key={index}
                className={
                  animated
                    ? index % 2 === 0
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                    : ""
                }
              >
                <CardGrid type="client" image={image} />
              </Grid>
            ))}
        </Grid>

        {isSmallScreen && (
          <Grid item xs={12}>
            <Box sx={{ marginTop: 2, textAlign: "center" }}>
              {visibleCards < cards.length && (
                <Button
                  variant="contained"
                  onClick={loadMoreCards}
                  sx={{
                    mt: 2,
                    backgroundColor: "#000000",
                    "&:hover": {
                      backgroundColor: "#333333",
                    },
                  }}
                >
                  Load More
                </Button>
              )}
              {visibleCards > 3 && (
                <Button
                  variant="contained"
                  onClick={handleLoadLess}
                  sx={{
                    mt: 2,
                    marginLeft: 2,
                    backgroundColor: "#000000",
                    "&:hover": {
                      backgroundColor: "#333333",
                    },
                  }}
                >
                  Show Less
                </Button>
              )}
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default OurClient;
