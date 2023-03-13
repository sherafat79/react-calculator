import React from "react";
type iProps = {
  character: string;
  disabled:boolean | undefined,
  onClick:(arg0: string)=>void


};
const Btn: React.FC<iProps> = ({ character,disabled ,onClick}) => (
  <button disabled={disabled} className="bg-green-300 p-6 shadow-sm rounded-lg w-20 h-20 font-medium text-xl" onClick={()=>onClick(character)}>
    {character}
  </button>
);
export default Btn;
