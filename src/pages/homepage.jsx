import React from "react";
import { Directory } from "../components/Directory/directory";
import { Footer } from "../components/footer";
import { Header } from "../components/Header/header";

export const Homepage = () => {
  return (
    <main style={{ padding: "0px 20px" }}>
      <Directory />
      <Footer />
    </main>
  );
};
