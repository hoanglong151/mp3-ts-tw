import React, { useMemo } from "react";
import { IoShuffleOutline } from "react-icons/io5";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { TbRepeatOnce, TbRepeat } from "react-icons/tb";

interface MusicProps {
  duration: number;
  current: number;
  isRepeat: string;
  isPlay: boolean;
  onClickTogglePlayMusic: () => void;
  onClickRepeatMusic: () => void;
  onClickChangeProgressMusic: (e: React.MouseEvent) => void;
}

const ControlMusic = (props: MusicProps) => {
  const {
    duration,
    current,
    isPlay,
    isRepeat,
    onClickTogglePlayMusic,
    onClickRepeatMusic,
    onClickChangeProgressMusic,
  } = props;

  let progress = (current / duration) * 100 - 2 || 0;

  // const handleTest = (e: React.MouseEvent) => {
  //   const target = e.target as HTMLElement;
  //   // console.log(((e.clientX - target.offsetLeft) / target.clientWidth) * 100);
  //   // progress = ((e.clientX - target.offsetLeft) / target.clientWidth) * 100;
  //   const getData = document.querySelector("#currentTime") as HTMLElement;
  //   if (getData) {
  //     console.log(getData.offsetLeft);
  //     getData.style.left = `${
  //       ((e.clientX - target.offsetLeft) / target.clientWidth) * 100
  //     }%`;
  //   }
  // };

  const formatDuration = useMemo(() => {
    return new Date(duration * 1000).toISOString().substring(14, 19);
  }, [duration]);

  const formatCurrentTime = useMemo(() => {
    return new Date(current * 1000).toISOString().substring(14, 19);
  }, [progress]);

  useMemo(() => {
    const getData = document.querySelector("#currentTime") as HTMLElement;
    if (getData) {
      getData.style.left = `${progress}%`;
    }
  }, [progress]);

  return (
    <div>
      <div className="flex items-center justify-center gap-x-4 text-primary-text">
        <button className="transition-all hover:bg-[rgba(255,255,255,0.15)] rounded-full p-1">
          <IoShuffleOutline className="text-2xl" />
        </button>
        <button className="transition-all hover:bg-[rgba(255,255,255,0.15)] rounded-full p-1">
          <MdSkipPrevious className="text-2xl" />
        </button>
        <button
          onClick={onClickTogglePlayMusic}
          className="transition-all rounded-full p-1 border-2 hover:text-primary-purple hover:border-primary-purple outline-none"
        >
          {isPlay ? (
            <BsFillPauseFill className="text-2xl" />
          ) : (
            <BsFillPlayFill className="text-2xl" />
          )}
        </button>
        <button className="transition-all hover:bg-[rgba(255,255,255,0.15)] rounded-full p-1">
          <MdSkipNext className="text-2xl" />
        </button>
        <button
          onClick={onClickRepeatMusic}
          className="transition-all hover:bg-[rgba(255,255,255,0.15)] rounded-full p-1"
        >
          {isRepeat === "none" ? (
            <TbRepeat className={`text-2xl`} />
          ) : isRepeat === "continue" ? (
            <TbRepeat className={`text-2xl text-primary-purple`} />
          ) : (
            <div className="relative">
              <TbRepeatOnce className={`text-2xl text-primary-purple`} />
            </div>
          )}
        </button>
      </div>
      <div className="group cursor-pointer flex items-center text-primary-text gap-x-4 py-2">
        <span>{formatCurrentTime}</span>
        <div
          onClick={(e) => onClickChangeProgressMusic(e)}
          className="relative flex items-center w-[490px] h-[6px] bg-white rounded-full"
        >
          <div
            id="currentTime"
            className={`absolute opacity-100 transition-all cursor-pointer w-4 h-4 bg-white rounded-full`}
          ></div>
        </div>
        <span>{formatDuration}</span>
      </div>
    </div>
  );
};

export default ControlMusic;
