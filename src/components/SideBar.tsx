import { useContext } from "react";
import AppContext from "../context/AppContext";
import HistoryCard from "./History/HistoryCard"


const SideBar: React.FC = () => {
  const { results, clearResult } = useContext(AppContext);
  return (
    <div className=" border-l border-black  h-full w-80 p-4 overflow-y-scroll scrollbar-hide font-iranSans">
      <div >
        تاریخچه محاسبات
        {
          results.length !== 0 && (<button className="float-left text-pink-700 text-sm" onClick={() => clearResult()}>
            پاک کردن
          </button>) 
        }
      </div>
      {
        results.length === 0 ? (
          <p className="text-center mt-2 text-pink-700 text-sm">تاریخچه ای وجود ندارد</p>
        )
          : results.map((res, index) => (
            <HistoryCard result={res.result} key={index} />
          ))
      }

    </div>
  )
}

export default SideBar