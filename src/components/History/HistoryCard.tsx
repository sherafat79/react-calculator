import React from "react";
type Props = {
result:string
}
const HistoryCard: React.FC<Props> = ({result}) => (
    <div className="bg-white w-full p-5 dark:bg-zinc-600 ltr font-iranSans shadow-lg rounded-lg my-2">
      <p className="text-xl font-medium  tracking-widest">
    {result}
      </p>
    </div>
)
export default HistoryCard;