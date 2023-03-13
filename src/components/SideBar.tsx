import HistoryCard from "./History/HistoryCard"


const SideBar = () => {
  return (
    <div className=" border-l border-black  h-full w-80 p-4 overflow-y-scroll scrollbar-hide font-iranSans">
        <div >
            تاریخچه محاسبات 
            <button className="float-left text-pink-700 text-sm">
                پاک کردن
            </button>
        </div>
        <HistoryCard/>
        <HistoryCard/>
        <HistoryCard/>
        <HistoryCard/>
    </div>
  )
}

export default SideBar