import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import img1 from "../assets/images/Macbook Pro.png";
import img2 from "../assets/images/Boards Notifications.png";
import Button from "../components/Button";
import "./Contents.css";
const Contents = () => {
  return (
    <section className="contents">
      <div className="heading">
        <Heading>Contents</Heading>
        <SubHeading>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </SubHeading>
      </div>

      <div className="blocks">
        <div className="block">
          <div className="text">
            <h3>Work</h3>
            <h4>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </h4>
          </div>
          <Button padding="13px 46px" backgroundColor="#4452FE">
            Sign Up
          </Button>
          <img src={img1} alt="macbook" />
        </div>
        <div className="block">
          <div className="text">
            <h3>Design with real data</h3>
            <h4>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </h4>
          </div>
          <Button padding="13px 46px" backgroundColor="#4452FE">
            Try For Free
          </Button>
          <img src={img2} alt="example-interface" />
        </div>
      </div>
    </section>
  );
};

export default Contents;
