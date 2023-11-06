import React from 'react'

import Image5 from '../Images/Image5.jpg';
import Daigramme from '../Images/Diagramme.jpg';
import Image3 from '../Images/Image3.jpg';
import Image6 from '../Images/Image6.jpg';

function Card() {
  return (
    <div>
      <section className="card-img mt-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
            <div><img src={Image5} alt="" className="img-fluid" /></div>
            </div>
            <div className="col-lg-6">
              <div className="card-position">
                <div className="card p-4 bg-white shadow-sm border-0">
                  <h2>Who we are</h2>
                  <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi quo provident dolor, odit molestias?</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatibus!</p>
                  </div>
                </div>
                <div className="btn-card text-end">
                  <button type="button" class="btn text-white rounded-pill btn-sm free-btn">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="new-card mt-5">
                <div className="card p-5 bg-white shadow-sm border-0">
                  <h2>What we do</h2>
                  <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi quo provident dolor, odit molestias?</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatibus!</p>
                  </div>
                </div>
                <div className="btn-card text-end">
                  <button type="button" class="btn text-white rounded-pill btn-sm free-btn">LEARN MORE</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5"><img src={Daigramme} alt="" className="img-fluid" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-img mt-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div><img src={Image3} alt="" className="img-fluid" /></div>
            </div>
            <div className="col-lg-6">
              <div className="card-position">
                <div className="card p-4 bg-white shadow-sm border-0">
                  <h2>How we do it</h2>
                  <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi quo provident dolor, odit molestias?</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatibus!</p>
                  </div>
                </div>
                <div className="btn-card text-end">
                  <button type="button" class="btn text-white rounded-pill btn-sm free-btn">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="new-card mt-5">
                <div className="card p-5 bg-white shadow-sm border-0">
                  <h2>Why you should pick us</h2>
                  <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi quo provident dolor, odit molestias?</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatibus!</p>
                  </div>
                </div>
                <div className="btn-card text-end">
                  <button type="button" class="btn text-white rounded-pill btn-sm free-btn">LEARN MORE</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5 this-img-card"><img src={Image6} alt="" className="img-fluid " /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card