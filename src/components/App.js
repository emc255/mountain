import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Homepage from "./Homepage"
import History from "./History"
import Team from "./Team"


const App = () => {
  return (
    <BrowserRouter>
        <Route exact path="/mountain" component={Homepage} />
        <Route path="/history" component={History} />
        <Route path="/team" component={Team} /> 
    </BrowserRouter>
  );
};

export default App;
