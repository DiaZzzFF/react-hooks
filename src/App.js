import React, {useEffect, useState} from "react";


const useLogger = (value) => {
  useEffect(() => {
    console.log(`value changed: `, value);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue(``);

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  };
};

const App = () => {
  const input = useInput(``);
  const lastName = useInput(``);
  const myText = useInput(``);

  useLogger(input.value);

  return (
    <div className="wrapper">
      <div className={`container p-3`}>
        <input type="text" {...input.bind} />
        <input type="text" {...lastName.bind} />
        <input type="text" {...myText.bind} />

        <button
          className="btn btn-warning"
          onClick={() => myText.clear()}
        >
          Очистить
        </button>

        <hr/>

        <p>{input.value}</p>
        <p>{lastName.value}</p>
        <p>{myText.value}</p>
      </div>
    </div>
  );
};


export default App;
