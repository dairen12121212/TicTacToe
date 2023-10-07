import { useState } from "react";
import "./PlaygroundItem.css";

export const PlaygroundItem = ({ data, onClickItem, id, gameover }) => {
  const [value, setValue] = useState(null);

  return (
    <div
      className="playground__item"
      onClick={() => value === data && !gameover && onClickItem(id)}
    >
      {data ? <span>X</span> : data === false ? <span>O</span> : null}
    </div>
  );
};
