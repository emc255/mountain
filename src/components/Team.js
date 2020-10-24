import React, {useState} from "react";
import {ThemeProvider} from "styled-components"

import Background from "../containers/Background";
import "../styles/index.css"
import img from "../images/mountain-snow.jpg"


const theme = {
  backgroundImage: img
};

const Team = () => {
  const [active, setActive] = useState("mountainActive");
  const [active2, setActive2] = useState("");

  const handleOnClick1 = () => {
    
    if(active === "" && active2 === "mountainActive") {
      setActive("mountainActive");
      setActive2("");
    }
  }
  const handleOnClick2 = () => {  
    if (active2 === "" && active === "mountainActive") {
      setActive("");
      setActive2("mountainActive");
    }
  }

  return (
    <ThemeProvider theme={theme}>
        <Background>
          <div className="team-header">
            <div className="team-header-container">
              <div className="team-upper-container">
                <div className="team-upper-container-flex">
                  <div className="team-text-number">02</div>
                  <div className="team-period-history-flex">
                      <div className="team-text-history">HISTORY</div>
                      <div className="team-text-period">.</div>
                  </div>
                  <div className="team-text-info">
                      Contrary to popular belief, Lorem Ipsum is not simply random text.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="team-nav">
            <div className="team-nav-container">
              <div onClick={handleOnClick1} className={`mountain-text ${active}`}>MOUNTAIN 1</div>
              <div onClick={handleOnClick2} className={`mountain-text ${active2}`}>MOUNTAIN 2</div>
            </div>
          </div>

          
          <div className="team-main-container">
            <div className="team-content-container">
                <p className="team-text-sched">SCHEDULE</p>
                <div className="team-inner-content-container">
                    <p>25 Nov 2016</p>
                    <p>printing and typesetting</p>
                </div>
                <div className="team-inner-content-container">
                    <p>25 Nov 2016</p>
                    <p>printing and typesetting</p>
                </div>
                <div className="team-inner-content-container">
                    <p>25 Nov 2016</p>
                    <p>printing and typesetting</p>
                </div>

            </div>
          </div>
          

          <div className="team-footer">
            <div className="team-footer-container">
              <div className="footer-text-logo">LOGO HERE</div>
              <div className="footer-text-reserve">COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </Background>
    </ThemeProvider>
  );
};

export default Team;
