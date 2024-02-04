import React from "react";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import Page from "@/components/Page/Page";
const Home = () => {
  return (
    <Page>
      <img src={image1} alt="image1" style={{ height: 200, marginRight: 10 }} />{" "}
      <br />
      <img
        src={image2}
        alt="image2"
        style={{ height: 200, marginRight: 10 }}
      />{" "}
      <img src={image3} alt="image3" style={{ height: 200, marginRight: 10 }} />{" "}
    </Page>
  );
};

export default Home;
