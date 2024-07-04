import React from 'react';
import { Menu } from './Menu';
import './Home.css';


export function Home() {
  return (
    <>
    <Menu/>
    <section id="home">
      <p>I am <span>Krishna Murthy</span></p>
      <p>I am a <span>DeVeloper</span></p>
      <p>Passionate in <span>Programming</span></p>
      {/* <p>Problem <span>Solver</span></p> */}
    </section>

    </>
  );
}
