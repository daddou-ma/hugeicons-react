import * as React from "react";
import type { SVGProps } from "react";

interface SealIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SealIcon = (props: SealIconProps) => {
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
        <path d="M9.77907 3.35212C10.3428 2.74898 10.6246 2.44741 10.9257 2.27941C11.5935 1.90686 12.4065 1.90686 13.0743 2.27941C13.3754 2.44741 13.6572 2.74898 14.2209 3.35212C14.8996 4.07828 15.5834 4.34707 16.5445 4.31459C17.3696 4.2867 17.7822 4.27276 18.1139 4.36689C18.8495 4.57561 19.4244 5.15054 19.6331 5.88612C19.7272 6.21784 19.7133 6.63038 19.6854 7.45546C19.6518 8.44883 19.9453 9.12242 20.6479 9.77907C21.251 10.3428 21.5526 10.6246 21.7206 10.9257C22.0931 11.5935 22.0931 12.4065 21.7206 13.0743C21.5526 13.3754 21.251 13.6572 20.6479 14.2209C19.9217 14.8996 19.6529 15.5834 19.6854 16.5445C19.7133 17.3696 19.7272 17.7822 19.6331 18.1139C19.4244 18.8495 18.8495 19.4244 18.1139 19.6331C17.7822 19.7272 17.3696 19.7133 16.5445 19.6854C15.5834 19.6529 14.8996 19.9217 14.2209 20.6479C13.6572 21.251 13.3754 21.5526 13.0743 21.7206C12.4065 22.0931 11.5935 22.0931 10.9257 21.7206C10.6246 21.5526 10.3428 21.251 9.77907 20.6479C9.12242 19.9453 8.44883 19.6518 7.45546 19.6854C6.63038 19.7133 6.21784 19.7272 5.88612 19.6331C5.15054 19.4244 4.57561 18.8495 4.36689 18.1139C4.27276 17.7822 4.2867 17.3696 4.31459 16.5445C4.34707 15.5834 4.07828 14.8996 3.35212 14.2209C2.74898 13.6572 2.44741 13.3754 2.27941 13.0743C1.90686 12.4065 1.90686 11.5935 2.27941 10.9257C2.44741 10.6246 2.74898 10.3428 3.35212 9.77907C4.07828 9.10038 4.34707 8.41658 4.31459 7.45546C4.2867 6.63038 4.27276 6.21784 4.36689 5.88612C4.57561 5.15054 5.15054 4.57561 5.88612 4.36689C7.32838 3.95764 8.57898 4.63615 9.77907 3.35212Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default SealIcon;