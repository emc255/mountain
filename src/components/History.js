import React from "react";
import {ThemeProvider} from "styled-components"
import { Link } from "react-router-dom";

import Background from "../containers/Background";
import Wrapper from "../containers/Wrapper";
import NavigatorLink from "../containers/NavigatorLink";

import SimpleSlider from "./SimpleSlider";


import "../styles/index.css"
import img from "../images/history-background.jpg"



const theme = {
    backgroundImage: img,
    position: "space-between",
    wrapperMinHeigth:"94vh"
  };

const History = () => {
    return (
        <ThemeProvider theme={theme}>
            <Background>
                <div className="history-header">
                    <div className="history-header-container">
                        <NavigatorLink>
                            <div className="history-left-nav-link">
                                <span className="history-logo">LOGO HERE</span>
                            </div>
                            <div className="history-right-nav-link">
                                <Link to="/mountain" className="history-text-link">
                                    01. Home
                                </Link>
                                <Link to="/team" className="history-text-link">
                                    02. Team
                                </Link> 
                            </div>
                        </NavigatorLink>
                    </div>
                </div>
                <Wrapper>
                    <div className="history-upper-container">
                        <div className="history-upper-container-flex">
                            <div className="history-text-number">01</div>
                            <div className="history-period-history-flex">
                                <div className="history-text-history">HISTORY</div>
                                <div className="history-text-period">.</div>
                            </div>
                        </div>
                        <div className="history-text-info">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
                        </div>
                    </div>
                </Wrapper>
                <div className="history-footer">
                    <div className="history-footer-container">
                        <SimpleSlider/>
                    </div>
                </div>
            </Background>
        </ThemeProvider>
      );
};

export default History;