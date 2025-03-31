import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 設定一個變數 count，並用 setCount 來更新它

  return (
    <button onClick={() => setCount(count + 1)}>點我: {count}</button>
  );
}

export default Counter;
