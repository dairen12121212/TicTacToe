import "./ClearBtn.css";

export const ClearBtn = ({ setInitialState, setTicTac }) => {
  const clearPlayground = () => {
    setTicTac(true);
    const arr = [null, null, null, null, null, null, null, null, null];
    setInitialState(arr);
  };
  return (
    <button onClick={() => clearPlayground()} className="clear">
      Очистить поле
    </button>
  );
};
