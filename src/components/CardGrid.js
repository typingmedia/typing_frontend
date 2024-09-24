import { Card, CardHeader, CardContent, Box } from "@mui/material";
import React from "react";
import "./CardGrid.css";
import { useScroll } from "../components/ScrollProvider";

const CardGrid = (props) => {
  const { contactRef } = useScroll();

  const formatTitle = (title) => {
    return title?.split("&").join("<br/>&<br/>");
  };

  const handleCardClick = () => {
    if (contactRef.current && props.type !=="client") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      className={`card-grid ${props.type === "client" ? "client" : ""}`}
      sx={{
        backgroundColor: "#F2F2F2",
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 180,
        width: "auto",
        borderRadius: 4,
        padding: props.type === "client" ? "0px" : "1px",
        position: "relative",
        overflow: "hidden",

        "&::before":
          props.type !== "client"
            ? {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                pointerEvents: "none",
                
              }
            : {},

        "& > *": {
          position: "relative",
          zIndex: 2
        },
      }}
    >
      {props?.type === "client" ? (
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor:'white',
          }}
        >
          <img
            src={props?.image}
            alt="logo"
            style={{
              maxWidth:props?.image=='policybazaar'?'100%':'80%',
              maxHeight: "70%",
              objectFit: "contain",
              marginBottom:20
            }}
          />
        </CardContent>
      ) : (
        <>
          <CardHeader
            title={
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  top: "86px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "600 !important",
                  color: "whitesmoke",
                  textAlign: "center",
                  zIndex: 2,
                  padding:2,
                  filter:"brightness(1)"
                }}
                dangerouslySetInnerHTML={{
                  __html: formatTitle(props?.title),
                }}
              />
            }
            sx={{
              position: "relative",
              height: 0,
              zIndex: 1,
            }}
          />
          <CardContent
            sx={{ color: "whitesmoke", textAlign: "left", zIndex: 2,}}
          >
            {props?.content}
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default CardGrid;
