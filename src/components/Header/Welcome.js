import React from "react";

import Logo from "../../assets/images/thread.jpg";
import About from "./About";
import "./Welcome.css";

const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div ref={element}>
          <img src={Logo} alt="logo" className="welcome--logo" />
          <p>Beautify your outfits with threads</p>
          <button className="welcome__cta-primary">
            {" "}
            <a id="contact_btn" href="tel:09031687355">
              Contact Us
            </a>
          </button>
        </div>
      </section>
      <About />
    </main>
  );
};

export default Welcome;
