import { useState } from "react";
/**
 * Square 컴포넌트는 게임 보드의 각 칸을 나타냅니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.value - 버튼에 표시될 값
 */
function Square() {
  const [value, setValue] = useState(null);
  /**
   * handleClick 함수는 버튼 클릭 시 호출되며, 콘솔에 "clicked"를 출력합니다.
   */
  function handleClick() {
    setValue("X");
  }

  /**
   * 버튼 요소를 반환합니다. 이 버튼은 클릭 시 handleClick 함수를 호출합니다.
   * 버튼의 내용으로는 props로 전달받은 value 값이 표시됩니다.
   */
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
