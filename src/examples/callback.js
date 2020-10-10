import React, {useState, useCallback} from "react";

import ItemsList from "./ItemsList";


const App = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? `blue` : `black`,
  };

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill(``).map((_, i) => `Элемент ${i + indexNumber}`);
  }, [count]);

  return (
    <div className="wrapper">
      <h1 style={styles}>Количество элементов: {count}</h1>

      <div>
        <button
          className="btn btn-success"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Добавить
        </button>

        <button
          className="btn btn-warning"
          onClick={() => setColored((prev) => !prev)}
        >
          Изменить
        </button>
      </div>

      <ItemsList
        getItems={generateItemsFromAPI}
      />
    </div>
  );
};


export default App;
