import { useContext } from "react";
import AppContext from "../context/AppContext";

const Header = () => {
  const { darkModeHandler, darkMode } = useContext(AppContext);

  return (
    <div className="bg-teal-50 shadow-md w-full p-4 flex justify-between dark:text-white dark:bg-blue-500 ">
      <p className="font-iranSans text-2xl font-medium ">ماشین حساب مهندسی</p>
      <div className=" ltr">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            value=""
            className="sr-only peer"
            onChange={darkModeHandler}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default Header;

// TODO: 🌞
// 🌜
