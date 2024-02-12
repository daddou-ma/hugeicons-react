import * as React from "react";
import type { SVGProps } from "react";

interface BubbleChatCancelIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BubbleChatCancelIcon = (props: BubbleChatCancelIconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M12.5 2.01175C12.3344 2.00395 12.1677 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 11.3765 21.9942 11.1875 21.9827 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2L19 5M19 5L22 8M19 5L22 2M19 5L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BubbleChatCancelIcon;