import React from "react";
type iProps={
  input:string,
  output:string
}
const Result :React.FC<iProps>=({input,output})=>(
    <div className="w-full bg-yellow-100 dark:bg-yellow-500 rounded-md p-4 h-16">
        <p className="text-xl font-medium  tracking-widest">{output===""?input:output}</p>
      </div>
)
export default Result;