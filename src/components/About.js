import React from 'react';
import './About.css';
import { Menu } from './Menu';


export function About() {
  return (
    <>
    <Menu/>
    <section id="about">
    <div className="about_bg">
      <div className="about_content">
        <h2>ABOUT ME</h2>
        <p>
          As a highly passionate and dedicated Front-End Developer based in Coimbatore, India, my objective is to
          utilize my expertise in Front-End and Graphic design tools to build premium and visually appealing websites.
          Additionally, my skills in Marketing, Retail, and Hospitality sectors can be leveraged to create innovative
          and effective digital solutions for businesses in these industries. Ultimately, I strive to create impactful
          and user-friendly websites that drive business growth and success.
        </p>
      </div>
    </div>
  </section>
    </>
  );
}
