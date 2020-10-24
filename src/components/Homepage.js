import React, {useState} from "react";
import { Link } from "react-router-dom";
import {ThemeProvider} from "styled-components"

import Background from "../containers/Background";
import Wrapper from "../containers/Wrapper";
import NavigatorLink from "../containers/NavigatorLink";

import "../styles/index.css"
import img from "../images/homepage-background.png"



const theme = {
  backgroundImage: img,
  position: "flex-end",
  wrapperMinHeigth:"100vh"
};


const Homepage = () => {
  const [active, setActive] = useState("");
  
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Wrapper>
          <NavigatorLink>
            
            <div className="ui accordion">
              <div onClick={() => setActive(active === "" ? "active" : "")} className={`title ${active}`}>
                <i className="dropdown icon"></i>
                  <span className="text-link">Menu</span>
              </div>
              <div className={`content ${active}`}>
                <div>
                  <Link to="/history" className="text-link">
                    01. History
                  </Link>
                </div>
                <div>
                  <Link to="/team" className="text-link">
                    02. Team
                  </Link>
                </div> 
              </div>
            </div>
            

            <div className="right-home-nav-link">
              <Link to="/history" className="text-link">
                01.History
              </Link>
              <Link to="/team" className="text-link">
                02.Team
              </Link> 
            </div>

        </NavigatorLink>
      </Wrapper>
    </Background>
  </ThemeProvider>
  );
};

export default Homepage;
