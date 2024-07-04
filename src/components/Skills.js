import React from 'react';
import './Skills.css';
import { Menu } from './Menu';
import { BiLogoHtml5 } from 'react-icons/bi';
import { BiLogoCss3 } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { BiLogoJavascript } from 'react-icons/bi';
import { RiReactjsLine } from 'react-icons/ri';
import { SiPostman } from 'react-icons/si';

export function Skills() {
  return (
    <>

      <Menu />
      <section id='skills'>
        <h1 className="skill_head text-center">My skills</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4" >
          <div className="card align">
            <div className="skill1" style={{ color: "crimson" }}>
              <BiLogoHtml5 />
            </div>
            <div className=" skills1" style={{ color: "crimson", fontsize: "large", textalign: "center", borderradius: "15" }}  >
              <h5 class="card-title">HTML</h5>
              <p class="card-text">The HyperText Markup Language or HTML is the standard markup language for
                documents designed </p>
            </div>
          </div>

          <div class="card align">
            <div class="skill2" style={{ color: "crimson" }}>
              <BiLogoCss3 />
            </div>
            <div class="skills2" style={{ color: "crimson", fontsize: "large", textalign: "center", borderradius: "15" }}  >
              <h5 class="card-title">CSS</h5>
              <p class="card-text">CSS is the language for describing the presentation of Web pages, including
                colors,layout, and fonts.</p>
            </div>
          </div>


          <div class="card align">
            <div class="skill3" style={{ color: "rgb(164, 57, 57)" }}>
              <BsFillBootstrapFill />
            </div>
            <div class="skills3" style={{ color: "crimson", fontsize: "large", textalign: "center", borderradius: "15" }}  >
              <h5 class="card-title">BOOTSTARP</h5>
              <p class="card-text">Bootstrap is a free, open source front-end development framework for the
                creation of websites and web apps.</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4" >
          <div className="card align">
            <div className="skill1" style={{ color: "crimson" }}>
              <BiLogoJavascript />
            </div>
            <div className=" skills1" style={{ color: "crimson", fontsize: "large", textalign: "center", borderradius: "15" }}  >
              <h5 class="card-title">Javascript</h5>
              <p class="card-text">JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. </p>
            </div>
          </div>

          <div class="card align">
            <div class="skill2" style={{ color: "crimson" }}>
              <RiReactjsLine />
            </div>
            <div class="skills2" style={{ color: "crimson", fontsize: "large", textalign: "center", borderradius: "15" }}  >
              <h5 class="card-title">React.js</h5>
              <p class="card-text">React is a JavaScript library created by Facebook that is used to build user interfaces (UI) for web and mobile applications. It is a tool for creating interactive and reusable UI components that can be used to build single-page applications, mobile apps, and server-rendered applications .</p>
            </div>
          </div>


          <div class="card align">
            <div class="skill3" style={{ color: "rgb(164, 57, 57)" }}>
              <SiPostman />
            </div>
            <div class="skills3" style={{ color: "crimson", fontsize: "large", textalign: "center", borderradius: "15" }}  >
              <h5 class="card-title">Postman</h5>
              <p class="card-text">Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster..</p>
            </div>
          </div>
        </div>


      </section>


    </>
  );
}


