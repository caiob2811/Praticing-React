import React, {useState, useMemo } from "react";

export default function AppMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  /*const doubleNumber = slowFunction(number) antes*/

  const doubleNumber = useMemo(() => {
    return slowFunction(number) // agora função só vai ser chamada quando chamar o number e não o text, ele guarda o texto na memória (Memo)
  },[number]); //recebe 2 params 1 function e [] de dependências

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setNumber(2)}>Increment</button>
      <p>text: {text}</p>
    </>
  );
}

const slowFunction = (num) => {
    console.log("Slow function is being called!")
    for (let i = 0; i <= 1000; i++) {
       return num * 2
    }
}
