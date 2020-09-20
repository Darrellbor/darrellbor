//@flow
import React from "react";

type MenuCloseProps = {
  onClick?: Function,
};
export const MenuClose = (props: MenuCloseProps) => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      onClick={props.onClick}
    >
      <circle cx="37.5" cy="37.5" r="37.5" fill="#535058" />
      <rect
        x="21.6372"
        y="23.8508"
        width="20.9462"
        height="3.02162"
        rx="1.51081"
        transform="rotate(36.9374 21.6372 23.8508)"
        fill="#FFCCB2"
      />
      <rect
        x="21.0117"
        y="50.3151"
        width="20.2487"
        height="2.66431"
        rx="1.33215"
        transform="rotate(-35.7047 21.0117 50.3151)"
        fill="#FFCCB2"
      />
      <rect
        x="53.7646"
        y="53.6704"
        width="20.2487"
        height="2.66431"
        rx="1.33215"
        transform="rotate(-139.576 53.7646 53.6704)"
        fill="#FFCCB2"
      />
      <rect
        x="55.7288"
        y="25.5303"
        width="20.7488"
        height="3.02162"
        rx="1.51081"
        transform="rotate(141.172 55.7288 25.5303)"
        fill="#FFCCB2"
      />
    </svg>
  );
};

export default MenuClose;
