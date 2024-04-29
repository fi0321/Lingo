import React from "react";
type Props = {
  inputRef: React.RefObject<HTMLInputElement>;
  value: string;
  handleChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  index: number;
};
const LingoCell = ({ inputRef, value, handleChange, index }: Props) => {
  return (
    <input
      className="h-10 w-10 border-2 border-black text-center"
      ref={inputRef}
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => handleChange(index, e)}
      disabled={!!value} // Disable input after a value is entered
    />
  );
};

export default LingoCell;
