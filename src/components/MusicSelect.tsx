import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const MusicSelect = () => {
  return (
    <div className="flex items-center gap-x-[10px] h-full text-primary-text">
      <div className="w-16 h-16">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      <div>
        <h2 className="text-primary-text text-base font-medium">Bong Co May</h2>
        <span className="text-sm opacity-60">NB3 Hoai Bao, Nguyenn</span>
      </div>
      <div className="flex items-center gap-x-2">
        <button className="hover:bg-[rgba(255,255,255,0.15)] transition-all p-2 rounded-full">
          <AiOutlineHeart />
        </button>
        <button className="hover:bg-[rgba(255,255,255,0.15)] transition-all p-2 rounded-full">
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
};

export default MusicSelect;
