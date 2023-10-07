import "./Playground.css";

import { useState } from "react";

import { PlaygroundItem } from "../PlaygroundItem/PlaygroundItem";
import { ClearBtn } from "../ClearBtn/ClearBtn";
import { Modal } from "../Modal/Modal";

export const Playground = () => {
  const [ticTac, setTicTac] = useState(true);
  const [gameover, setGameover] = useState(false);
  const [initialArr, setInitialState] = useState([null, null, null, null, null, null, null, null, null]);

  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], // Проверка по горизонтали, вертикали и диагонали
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6], // Проверка по горизонтали, вертикали и диагонали
    [3, 4, 5],
    [6, 7, 8], // Проверка по горизонтали и вертикали
  ];

  const checkWinner = (arr) => {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (arr[a] !== null && arr[a] === arr[b] && arr[a] === arr[c]) {
        console.log("yes");
        setGameover(true);
        return;
      }
    }
  };

  const onClickItem = (id) => {
    const newArr = [...initialArr];
    newArr[id] = ticTac;
    setInitialState(newArr);
    setTicTac((item) => !item);

    checkWinner(newArr);
  };

  return (
    <>
      <ClearBtn setInitialState={setInitialState} setTicTac={setTicTac} />
      <div className="playground__player">
        {!gameover ? <div>Сейчас ходит: {ticTac ? <span>X</span> : <span>О</span>}</div> : <div>Сейчас никто не ходит :)</div>}
      </div>
      <div className="playground">
        <div className="playground__wrapper">
          {initialArr.map((item, i) => {
            return <PlaygroundItem data={item} key={i} id={i} gameover={gameover} onClickItem={onClickItem} />;
          })}
        </div>
      </div>
      {gameover && (
        <Modal
          winner={"я"}
          setGameover={setGameover}
          gameover={gameover}
          setTicTac={setTicTac}
          initialArr={initialArr}
          setInitialState={setInitialState}
        />
      )}
    </>
  );
};
