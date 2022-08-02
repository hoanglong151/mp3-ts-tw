import React from "react";
import { FiVolume2 } from "react-icons/fi";

const ControlVolume = () => {
  return (
    <div className="group cursor-pointer flex items-center text-primary-text gap-x-1">
      <button className="transition-all group-hover:bg-[rgba(255,255,255,0.15)] rounded-full p-2">
        <FiVolume2 className="text-xl" />
      </button>
      <div className="flex items-center w-[70px] h-1 rounded-full bg-primary-text">
        <div className="w-3 h-3 opacity-0 transition-all group-hover:opacity-100 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default ControlVolume;
