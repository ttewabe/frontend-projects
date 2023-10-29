import React, { FC, useEffect } from "react";
import "./About.css";

export type AboutProps = {
  setFormTitle: (title: string) => void;
};

const About: FC<AboutProps> = ({ setFormTitle }) => {
  useEffect(() => {
    setFormTitle("About Increment ");
  }, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default About;
