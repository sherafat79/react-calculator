import React from "react"
interface Caracters: Array<{
    character:string,
    type:"value"|"operator",
  }>
const data=[
    {
        character:"1",
        type:"value",
    }
]
type props={}
const Calculator: React.FC<props>=()=>{
    return (
        <div className="bg-blue-300 w-auto h-auto float-left rounded-md py-9 px-5 ltr">
                <div className="w-full bg-yellow-100 h-16 rounded-md p-4">
                <p className="text-xl font-medium  tracking-widest">
      2+3=5
      </p>
                </div>

                <div className="  mt-4  grid grid-cols-6 grid-rows-4 gap-6 ">
                    <button className="bg-green-300 p-6 shadow-sm rounded-lg w-20 h-20">1</button>
        
                  
                </div>
        </div>
    )
}
export default Calculator;