import React, {useState} from "react";


const computeInitialCounter = () => {
  console.log(`Some calculations...`);

  return Math.trunc(Math.random() * 20);
};

const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());

  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  // редкий способ, когда state как объект шаг_1
  const [state, setState] = useState({
    title: `Счётчик`,
    date: Date.now(),
  });

  const increment = () => {
    // setCounter(counter + 1);

    setCounter((prevCounter) => {
      return (prevCounter + 1);
    });

    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  // редкий способ шаг_2
  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: `Новое название`,
      }
    });
  };

  return (
    <div className="wrapper">
      <h1>Счётчик: {counter}</h1>

      <div>
        <button
          className="btn btn-success"
          onClick={increment}
        >
          Добавить
        </button>

        <button
          className="btn btn-danger"
          onClick={decrement}
        >
          Убрать
        </button>
      </div>

      <pre>{JSON.stringify(state, null, 2)}</pre>

      <button
        className="btn btn-outline-warning"
        onClick={updateTitle}
      >
        Изменить название
      </button>
    </div>
  );
};


export default App;