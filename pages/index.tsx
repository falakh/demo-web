import type { NextPage } from "next";
import { About } from "../components/template/about-template";
import { ContactTemplate } from "../components/template/contact-template";
import { HomeTemplate } from "../components/template/home-template";
import { PriceTemplate } from "../components/template/price-template";

const Home: NextPage = () => {
  return (
    <>
      <HomeTemplate />
      <div id="about"></div>
      <div id="pricing">
        <PriceTemplate />
      </div>
      <div id="contact">
        <ContactTemplate />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
};

export default Home;
