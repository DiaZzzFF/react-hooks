import React, {useState, useEffect, useRef} from "react";


const App = () => {
  const [value, setValue] = useState(`initial`);
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef(``);

  useEffect(() => {
    renderCount.current++;

    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div className="wrapper">
      <h1>Количество рендеров: {renderCount.current}</h1>

      <h1>Прошлое состояние: {prevValue.current}</h1>

      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        ref={inputRef}
      />

      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </div>
  );
};


export default App;
