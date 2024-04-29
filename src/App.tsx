import { useState } from "react";
import LingoCell from "./components/LingoCell.tsx";
import LingoRow from "./components/LingoRow.tsx";

function App() {
  const [rowVisible, setRowVisible] = useState<boolean>(true);
  const [data, setData] = useState<string[]>([""]);

  let practice: string;
  const setRowData = (inputText: string) => {
    const newData = [...data];
    newData[data.length - 1] = inputText;
    newData.push("");
    setData(newData);
  };
  return (
    <>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          setRowVisible(!rowVisible);
        }}
        className="border-2 border-red-500"
      >
        Click me
      </button>
      <div className="flex h-1/2 w-1/2 flex-col items-center justify-center border-2 border-black">
        {data.map((item, index) => {
          return (
            <LingoRow
              key={index}
              rowVisible={rowVisible}
              setRowData={setRowData}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
