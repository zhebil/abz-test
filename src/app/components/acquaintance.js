import React from "react";
import acquaintanceImage from "../assets/man-laptop-v1.svg";
export default function Acquaintance() {
  return (
    <section className="acquaintance section-padding">
      <div className="container">
        <h2 className="acquaintance__title title">Let's get acquainted</h2>
        <div className="acquaintance__body">
          <div className="acquaintance__img">
            <img src={acquaintanceImage} width="340" height="285" alt="Man with laptop" />
          </div>
          <div className="acquaintance__text">
            <h3 className="acquaintance__subtitle">
              I am cool frontend developer
            </h3>
            <div className="acquaintance__description p">
              <p>
                We will evaluate how clean your approach to writing CSS and
                Javascript code is. You can use any CSS and Javascript 3rd party
                libraries without any restriction.
              </p>
              <p>
                If 3rd party css/javascript libraries are added to the project via
                bower/npm/yarn you will get bonus points. If you use any task
                runner (gulp/webpack) you will get bonus points as well. Slice
                service directory page P​SD mockup​ into HTML5/CSS3.
              </p>
            </div>
            <a href="#sign-up" className="link acquaintance__link">Sing up now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
