import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Stack, useMediaQuery } from "@mui/material";
import "./../ourclient/OurClient.css";
import CardGrid from "../components/CardGrid";
import { CSSTransition } from "react-transition-group";
import influencer from "./5.png";
import tv from "./6.png";
import content from "./7.png";
import blog from "./8.png";
import seo from "./9.png";
import copywriting from "./10.png";
import email from "./13.png";
import cgi from "./cgi.png";
import editing from "./11.png";
import ghost from "./12.png";
import script from "./14.png";



const cardData = [
  {
    id: 1,
    title: "INFLUENCER MARKETING & UGC SCRIPTS",
    content: "Custom scripts that connect influencers with their audience in an authentic and impactful way",
    backgroundImage: influencer,
  },
  {
    id: 2,
    title: "AD FILM/TVC & JINGLES",
    content: "Creative and captivating scripts and jingles for commercial and video content that leave a lasting impression",
    backgroundImage: tv,
  },
  {
    id: 3,
    title: "CONTENT STRATEGY",
    content: "Planning and managing content creation and delivery to maximize impact",
    backgroundImage: content,
  },
  {
    id: 4,
    title: "BLOGS & ARTICLES",
    content: "Insightful and Informative content to establish your authority and engage your audience",
    backgroundImage: blog,
  },
  {
    id: 5,
    title: "SEO-FRIENDLY CONTENT",
    content: "Optimized articles and web content to enhance your search engine ranking and attract organic traffic",
    backgroundImage: seo,
  },
  {
    id: 6,
    title: "COPYWRITING",
    content: "Promotional and marketing content that captures your brand's voice and drives action",
    backgroundImage: copywriting,
  },
  {
    id: 7,
    title: "EMAIL CAMPAIGNS & BUSINESS PROPOSALS",
    content: "Persuasive email content that boosts open rates and conversions and business proposals and case studies",
    backgroundImage: editing,
  },
  {
    id: 8,
    title: "CGI VIDEOS",
    content: "Our CGI video service brings your ideas to life with stunning visuals. We specialize in creating high quality CGI content that captures the imagination and enhances storytelling",
    backgroundImage: cgi,
  },
  {
    id: 9,
    title: "EDITING & PROOFREADING",
    content: "Rigorous review and refinement to ensure clarity accuracy, and professionalism",
    backgroundImage: email,
  },
  {
    id: 10,
    title: "GHOSTWRITING",
    content: "Content for individuals who are credited as the author.",
    backgroundImage: ghost,
  },
  {
    id: 11,
    title: "SCRIPTWRITING",
    content: "Compelling scripts for Instagram, youtube, andother online videos.",
    backgroundImage: script,
  },
];

const OurServices = () => {
  const [animated, setAnimated] = useState(false);
  const [show, setShow] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3); 
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    setAnimated(true);
  }, []);

  const loadMoreCards = () => {
    setVisibleCards((prev) => Math.min(prev + 3, cardData.length));
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
      }}
      className="client-container"
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          maxWidth: "100%",
          width: "1000px",
        }}
      >
        {cardData
          .slice(0, isSmallScreen ? visibleCards : (show ? cardData.length : 9))
          .map((card) => (
            <Grid
              key={card.id}
              item
              xs={12}
              sm={6}
              md={4}
              className={
                animated ? (card.id % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left") : ""
              }
            >
              <CardGrid
                title={card.title}
                content={card.content}
                backgroundImage={card.backgroundImage}
              />
            </Grid>
          ))}
      
      {isSmallScreen && (
      <Grid item xs={12}>
        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            {visibleCards < cardData.length && (
              <Button
                variant="contained"
                onClick={loadMoreCards}
                sx={{
                  backgroundColor: '#000000',
                  '&:hover': {
                    backgroundColor: '#333333',
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
                  backgroundColor: '#000000',
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                }}
              >
                Show Less
              </Button>
            )}
          </Stack>
        </Box>
      </Grid>
    )}
        {!isSmallScreen && (
          <Grid
            item
            xs={12}
            className={animated ? "animate-slide-in-right" : ""}
            container
            justifyContent="center"
          >
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#000000",
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <>Hide</> : <>Load More</>}
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default OurServices;
