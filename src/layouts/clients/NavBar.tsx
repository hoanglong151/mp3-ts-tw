import React from "react";
import { CgColorBucket } from "react-icons/cg";
import { BsUpload } from "react-icons/bs";
import ButtonMenu from "~/components/ButtonMenu";
import Search from "~/components/Search";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Search />
      <div className="flex gap-x-3">
        <ButtonMenu>{<CgColorBucket className="w-5 h-5" />}</ButtonMenu>
        <ButtonMenu>{<BsUpload className="w-5 h-5" />}</ButtonMenu>
      </div>
    </div>
  );
};

export default NavBar;
