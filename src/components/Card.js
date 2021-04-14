import React from "react";

import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";
import img7 from "../Images/img7.jpg";
import img8 from "../Images/img8.jpg";
import img9 from "../Images/img9.jpg";


import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "tachyons";

const Card = () => {
  return (
    <>
      <div className="container_fluid">
        ]
        <div className="container mt-4 bg-grey">
          <div className="row mx-auto mb-4">
            <div className="s1 mt-5 grow mx-auto col-10 col-md-4 col-4">
              <div class="card bf">
                <img
                  class="img-fluid"
                  class="card-img-top"
                  src={img1}
                  alt="Card image"
                />
                <div class="card-body bf">
                  <h4 class="card-title  b"> CAPPADOCIA ,TURKEY</h4>
                  <p class="card-text">
                    Latitude : 38°21'12.6"N
                    <br />
                    Longitude : 35°5'28.0"E
                  </p>
                  <a
                    href="https://goo.gl/maps/NA71KTTCfPrBLQhg7"
                    target="_blank"
                    class="glow-on-hover btn-lg"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="s1 mt-5 grow col-10  mx-auto col-md-4 col-4">
              <div class="card bf">
                <img
                  class="img-fluid"
                  class="card-img-top"
                  src={img2}
                  alt="Card image"
                />
                <div class="card-body bf">
                  <h4 class="card-title b">WHITEHAVEN BEACH,AUSTRALIA</h4>
                  <p class="card-text">
                    Latitude : 20°16'56.8"S
                    <br />
                    Longitude : 149°2'19.9"E
                  </p>
                  <a
                    href="https://goo.gl/maps/PvRGs2YC9xqcTpRSA"
                    target="_blank"
                    class="glow-on-hover btn-lg"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="s1 mt-5 grow col-10  mx-auto col-md-4 col-4">
              <div class="card bf" styles="width:400px">
                <img
                  class="img-fluid"
                  class="card-img-top"
                  src={img3}
                  alt="Card image"
                />
                <div class="card-body bf ">
                  <h4 class="card-title">
                    THE FAIRY POOLS, ISLE OF SKYE, SCOTLAND
                  </h4>
                  <p class="card-text">
                    Latitude : 57°15'1.2"N
                    <br />
                    Longitude : 6°15'29.9"W
                  </p>
                  <a
                    href="https://g.page/fairypools?share"
                    target="_blank"
                    class="glow-on-hover  btn-lg"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>

            <div className="s1 mt-5 grow col-10  mx-auto col-md-4 col-4">
              <div class="card bf">
                <img
                  class="img-fluid"
                  class="card-img-top"
                  src={img4}
                  alt="Card image"
                />
                <div class="card-body bf ">
                  <h4 class="card-title">GRAND CANYON NATIONAL PARK, USA</h4>
                  <p class="card-text">
                    Latitude : 36°6'24.9"N
                    <br />
                    Longitude : 112°6'46.6"W
                  </p>
                  <a
                    href="https://goo.gl/maps/XVoyo4KGcTZaYkRY7"
                    target="_blank"
                    class="glow-on-hover btn-lg"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>

            <div className="s1 mt-5 grow col-10  mx-auto col-md-4 col-4">
              <div class="card bf" styles="width:400px">
                <img
                  class="img-fluid"
                  class="card-img-top"
                  src={img5}
                  alt="Card image"
                />
                <div class="card-body bf">
                  <h4 class="card-title">HUACACHINA, PERU</h4>
                  <p class="card-text">
                    Latitude : 14°5'14.9"S
                    <br />
                    Longitude :75°45'45.3"W
                  </p>
                  <a
                    href="https://goo.gl/maps/3yBgBLbJo1xzAoxP9"
                    target="_blank"
                    class="glow-on-hover btn-lg"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>

            <div className="s1 mt-5 grow col-10  mx-auto col-md-4 col-4">
              <div class="card bf">
                <img
                  class="img-fluid"
                  class="card-img-top"
                  src={img6}
                  alt="Card image"
                />
                <div class="card-body bf ">
                  <h4 class="card-title">SALAR DE UYUNI, BOLIVIA</h4>
                  <p class="card-text">
                    Latitude : 20°8'1.6"S
                    <br />
                    Longitude : 67°29'20.9"W
                  </p>
                  <a
                    href="https://goo.gl/maps/iiTu4JY8MAe2HeTBA"
                    target="_blank"
                    class="glow-on-hover btn-lg"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="row mx-auto my-4">
              <div className="s1 mt-5 grow col-10  mx-auto col-md-4 col-4">
                <div class="card bf" styles="width:400px">
                  <img
                    class="img-fluid"
                    class="card-img-top"
                    src={img7}
                    alt="Card image"
                  />
                  <div class="card-body bf ">
                    <h4 class="card-title">
                      PLITVICE LAKES NATIONAL PARK, CROATIA
                    </h4>
                    <p class="card-text">
                      Latitude : 44°51'55.4"N
                      <br />
                      Longitude : 15°34'55.2"E
                    </p>
                    <a
                      href="https://goo.gl/maps/w7uLDLxSYmkUbwer5"
                      target="_blank"
                      class="glow-on-hover btn-lg"
                    >
                      Location
                    </a>
                  </div>
                </div>
              </div>

              <div className="s1 mt-5 grow col-10  mx-auto col-md-4 col-4">
                <div class="card bf">
                  <img
                    class="img-fluid"
                    class="card-img-top"
                    src={img8}
                    alt="Card image"
                  />
                  <div class="card-body bf">
                    <h4 class="card-title f3">MILFORD SOUND, NEW ZEALAND</h4>
                    <p class="card-text">
                      Latitude : 44°38'29.0"S
                      <br />
                      Longitude :167°53'50.6"E
                    </p>
                    <a
                      href="https://goo.gl/maps/sgox7y7hojKSTWfq5"
                      target="_blank"
                      class="glow-on-hover btn-lg"
                    >
                      Location
                    </a>
                  </div>
                </div>
              </div>

              <div className="s1 mt-5 grow col-10  mx-auto col-md-4 col-4">
                <div class="card bf">
                  <img
                    class="img-fluid"
                    class="card-img-top"
                    src={img9}
                    alt="Card image"
                  />
                  <div class="card-body bf ">
                    <h4 class="card-title">MACHU PICCHU, PERU</h4>
                    <p class="card-text">
                      Latitude : 13°9'47.3"S
                      <br />
                      Longitude : 72°32'41.9"W
                    </p>
                    <a
                      href="https://goo.gl/maps/q4tV9NzpRqunaLKZ9"
                      target="_blank"
                      class="glow-on-hover btn-lg"
                    >
                      Location
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
