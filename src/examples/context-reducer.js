import React from "react";

import Main from "./Main";
import Alert from "./alert/Alert";
import {AlertProvider} from "./alert/AlertContext";


const App = () => {
  return (
    <AlertProvider>
      <div className="wrapper">
        <div className={`container p-3`}>
          <Alert />

          <Main toggle={() => {}} />
        </div>
      </div>
    </AlertProvider>
  );
};


export default App;
