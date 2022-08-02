import React from "react";

interface ButtonMenuProps {
  children: React.ReactNode;
}

const ButtonMenu = (props: ButtonMenuProps) => {
  const { children } = props;
  return (
    <button className="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(255,255,255,0.15)] rounded-full text-primary-text">
      {children}
    </button>
  );
};

export default ButtonMenu;
