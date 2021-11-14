import React from "react";

export const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        bottom: `0`,
        backgroundColor: "rgb(37, 36, 36)",
        height: "15vh",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          height: "13vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        {" "}
        &copy; 2021 StyleDeck All rights reserved
      </div>
    </div>
  );
};
