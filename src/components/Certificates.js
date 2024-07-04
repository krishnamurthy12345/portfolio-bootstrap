import React from 'react';
import { Menu } from './Menu';
import './Certificates.css';
import HTML from './assets/HTML.jpg';
import CSS from './assets/CSS.jpg';
import UX from './assets/UX Design.jpg';
import Javascript from './assets/Javascript.jpg';



export function Certificates() {
  return (
    <>
      <Menu />
      <section id='certificates'>
        <h1 className="certi_head text-center">Certificates</h1>
        <div className="row row-cols-2 row-cols-md-4 g-3">
          <div className="certificate1">
            <div className="card">
              <img src={HTML} alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">HTML</h5>
              </div>
            </div>
          </div>
          <div className="certificate2">
            <div className="card">
              <img src={CSS} alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">CSS</h5>
              </div>
            </div>
          </div>
          <div className="certificate3">
            <div className="card">
              <img src={Javascript} alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Javascript</h5>
              </div>
            </div>
          </div>
          <div className=" row row-cols-2 row-cols-md-4 g-3">
            <div className="certificate4">
              <div className="card">
                <img src={UX} alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">UX Design</h5>
                </div>
              </div>
            </div>
            <div className="certificate5">
              <div className="card">
                <img src="UX Design.jpg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">UX Design</h5>
                </div>
              </div>
            </div>
            {/* <div class="certificate6">
              <div class="card">
                <img src="UX Design.jpg" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center">UX Design</h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}