import "./Modal.css";

export const Modal = ({ gameover, setGameover, setInitialState, setTicTac }) => {
  const onStartGame = () => {
    setGameover(false);
    setTicTac(true);
    if (gameover) {
      const arr = [null, null, null, null, null, null, null, null, null];
      setInitialState(arr);
    }
  };
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__winner">игра окончена!</div>
        <button onClick={() => onStartGame()} className="modal__start">
          Начать заново
        </button>
      </div>
    </div>
  );
};
