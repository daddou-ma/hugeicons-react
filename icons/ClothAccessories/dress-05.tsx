import * as React from "react";
import type { SVGProps } from "react";

interface Dress05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Dress05Icon = (props: Dress05IconProps) => {
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
        <path d="M6.26869 7.96595C5.55098 8.65784 5.19212 9.00379 4.75494 8.99997C3.73206 8.99102 1.92649 7.00413 2.00231 5.986C2.033 5.57393 2.39927 5.26497 3.13182 4.64705L5.32917 2.79353C5.979 2.24539 6.87323 2.22352 7.68526 2.06696C8.00922 2.0045 8.1712 1.97327 8.31518 2.02893C8.77941 2.20837 9.16219 3.05277 9.4391 3.43412C10.604 5.03836 11.1864 5.84049 12.0003 5.84049C12.8141 5.84049 13.3966 5.03836 14.5615 3.43412C14.8384 3.05277 15.2211 2.20837 15.6854 2.02893C15.8294 1.97327 15.9913 2.0045 16.3153 2.06696C17.1591 2.22965 17.9924 2.22083 18.6714 2.79353L20.8687 4.64705C21.6013 5.26497 21.9676 5.57393 21.9982 5.986C22.0741 7.00413 20.2685 8.99102 19.2456 8.99997C18.8084 9.00379 18.4496 8.65784 17.7319 7.96595" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 7C7.5 9 6.95594 11.1815 6.59802 13.2178C6.22004 15.3682 5.58295 16.6762 5.21963 18.4412C4.97017 19.6531 4.84545 20.2591 5.33363 20.7716C6.71183 22.2184 16.9342 22.5901 18.6664 20.7716C19.1546 20.2591 19.0298 19.6531 18.7804 18.4412C18.4171 16.6762 17.78 15.3682 17.402 13.2178C17.0441 11.1815 16.5 9 18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Dress05Icon;