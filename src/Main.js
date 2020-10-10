import React from "react";
import {useAlert} from "./alert/AlertContext";


const Main = () => {
  const {toggle} = useAlert();

  return (
    <>
      <h1>Пример с Context</h1>

      <button className="btn btn-success" onClick={toggle}>
        Показать alert
      </button>
    </>
  );
};


export default Main;
