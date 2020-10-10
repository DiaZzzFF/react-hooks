import React from "react";
import {useAlert} from "./alert/AlertContext";


const Main = () => {
  const {show} = useAlert();

  return (
    <>
      <h1>Пример с Context</h1>

      <button
        className="btn btn-success"
        onClick={() => show(`Этот текст из Main.js`)}
      >
        Показать alert
      </button>
    </>
  );
};


export default Main;
