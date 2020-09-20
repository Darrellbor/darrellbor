//@flow
import React from "react";

type MenuIconProps = {
  onClick?: Function,
};

export const MenuIcon = (props: MenuIconProps) => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      onClick={props.onClick}
    >
      <circle cx="37.5" cy="37.5" r="37.5" fill="#FFCCB2" fillOpacity="0.62" />
      <rect x="14" y="20" width="38" height="5" rx="2.5" fill="#535058" />
      <rect x="14" y="34" width="38" height="5" rx="2.5" fill="#535058" />
      <rect x="14" y="48" width="38" height="5" rx="2.5" fill="#535058" />
      <rect
        x="61.9999"
        y="20"
        width="34.3339"
        height="5"
        rx="2.5"
        transform="rotate(89.5871 61.9999 20)"
        fill="#535058"
      />
    </svg>
  );
};

export default MenuIcon;
