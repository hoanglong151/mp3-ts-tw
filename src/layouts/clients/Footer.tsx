import React, { useRef } from "react";
import ControlMusic from "~/components/ControlMusic";
import ControlVolume from "~/components/ControlVolume";
import MusicSelect from "~/components/MusicSelect";
import beep from "~/assets/musics/test.mp3";
import beep1 from "~/assets/musics/test1.mp3";
import { useState } from "react";

const listMusic: Array<string> = [beep, beep1];

const Footer = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isRepeat, setIsRepeat] = useState("none");
  const refMusic = useRef(new Audio(listMusic[currentSong]));

  refMusic.current.ontimeupdate = () => {
    setCurrentTime(refMusic.current.currentTime);
  };

  refMusic.current.onended = () => {
    if (isRepeat === "onlyOne") {
      refMusic.current.play();
    } else if (isRepeat === "continue") {
      if (listMusic.length - 1 !== currentSong) {
        setCurrentSong((prev) => prev + 1);
        refMusic.current = new Audio(listMusic[currentSong + 1]);
        refMusic.current.play();
      } else {
        setCurrentSong(0);
        refMusic.current = new Audio(listMusic[0]);
        refMusic.current.play();
      }
    } else {
      refMusic.current.pause();
      setIsPlay(false);
    }
  };

  const handlePlayMusic = () => {
    if (isPlay) {
      refMusic.current.pause();
      setIsPlay(false);
    } else {
      refMusic.current.play();
      setIsPlay(true);
    }
  };

  const handleRepeatMusic = () => {
    switch (isRepeat) {
      case "none":
        setIsRepeat("continue");
        break;
      case "continue":
        setIsRepeat("onlyOne");
        break;
      case "onlyOne":
        setIsRepeat("none");
        break;
      default:
        throw Error("Invalid");
    }
  };

  const handleChangeProgressMusic = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const progess =
      ((e.clientX - target.offsetLeft) / target.clientWidth) * 100;
    const setNewCurrentTime = (progess * refMusic.current.duration) / 100;
    refMusic.current.currentTime = setNewCurrentTime;
    setCurrentTime(setNewCurrentTime);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-5 bg-[#120C1C] h-[90px]">
      <MusicSelect />
      <ControlMusic
        onClickTogglePlayMusic={handlePlayMusic}
        onClickRepeatMusic={handleRepeatMusic}
        onClickChangeProgressMusic={handleChangeProgressMusic}
        isPlay={isPlay}
        isRepeat={isRepeat}
        duration={refMusic.current.duration || 0}
        current={currentTime}
      />
      <ControlVolume />
    </div>
  );
};

export default Footer;
