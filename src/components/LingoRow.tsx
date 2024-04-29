import React, { useRef, useState } from "react";
import LingoCell from "./LingoCell.tsx";
type Props = {
  rowVisible: boolean;
  setRowData: (inputText: string) => void;
};
const LingoRow = ({ rowVisible, setRowData }: Props) => {
  const [inputs, setInputs] = useState<string[]>(Array(4).fill(""));
  const [inputCount, setInputCount] = useState(0);

  const inputRefs = useRef(
    inputs.map(() => React.createRef<HTMLInputElement>()),
  );
  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newInputs = [...inputs];
    const newInputCount = inputCount + 1;
    setInputCount(newInputCount);

    newInputs[index] = event.target.value.slice(0, 1); // Limit to one character
    if (newInputCount >= 4) {
      console.log(newInputs.join(""));
      setRowData(newInputs.join(""));
    }
    setInputs(newInputs);
    console.log(newInputs);

    // Move focus to the next input if there's a next input and something was entered
    if (
      event.target.value &&
      index < inputs.length - 1 &&
      inputRefs.current[index + 1].current !== null
    ) {
      inputRefs.current[index + 1].current?.focus();
    }
  };

  return (
    <ul
      className="flex flex-row"
      style={{
        opacity: rowVisible ? "1" : "0",
      }}
    >
      {inputs.map((value, index) => (
        <LingoCell
          key={index}
          inputRef={inputRefs.current[index]}
          value={value}
          index={index}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};

export default LingoRow;
