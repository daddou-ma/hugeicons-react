import * as React from "react";
import type { SVGProps } from "react";

interface TouchLocked02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TouchLocked02Icon = (props: TouchLocked02IconProps) => {
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
        <path d="M6.74986 14C6.74986 14.4142 7.08564 14.75 7.49986 14.75C7.91407 14.75 8.24986 14.4142 8.24986 14H6.74986ZM10.9999 9.5H10.2499C10.2499 9.70469 10.3335 9.90049 10.4814 10.042C10.6294 10.1835 10.8287 10.2584 11.0332 10.2493L10.9999 9.5ZM6.75 22C6.75 22.4142 7.08579 22.75 7.5 22.75C7.91421 22.75 8.25 22.4142 8.25 22H6.75ZM5.17457 17.0914L4.5335 17.4807L4.5335 17.4807L5.17457 17.0914ZM4.12367 13.6086L4.83213 13.8547H4.83213L4.12367 13.6086ZM7.95162 10.5988C8.28232 10.3494 8.34821 9.87908 8.09878 9.54838C7.84936 9.21768 7.37908 9.15179 7.04838 9.40122L7.95162 10.5988ZM17.0002 12.0592C17.309 12.3352 17.7831 12.3087 18.0592 11.9998C18.3352 11.691 18.3087 11.2169 17.9998 10.9408L17.0002 12.0592ZM6.74986 3.75V14H8.24986V3.75H6.74986ZM10.2499 3.75V9.5H11.7499V3.75H10.2499ZM8.24986 3.75C8.24986 3.19772 8.69757 2.75 9.24986 2.75V1.25C7.86914 1.25 6.74986 2.36929 6.74986 3.75H8.24986ZM9.24986 2.75C9.80214 2.75 10.2499 3.19772 10.2499 3.75H11.7499C11.7499 2.36929 10.6306 1.25 9.24986 1.25V2.75ZM6.75 21.0049V22H8.25V21.0049H6.75ZM4.5335 17.4807C4.68109 17.7237 4.9139 18.036 5.14796 18.3478C5.39257 18.6736 5.65864 19.0247 5.90933 19.3828C6.16099 19.7424 6.38197 20.088 6.53771 20.395C6.70348 20.7219 6.75 20.919 6.75 21.0049H8.25C8.25 20.5542 8.06801 20.0961 7.87547 19.7165C7.6729 19.3171 7.40577 18.905 7.13824 18.5227C6.86974 18.1391 6.58554 17.7642 6.34751 17.4472C6.09892 17.1161 5.91672 16.8686 5.81564 16.7021L4.5335 17.4807ZM4.83213 13.8547C4.91172 13.6256 5.11441 13.3043 5.43705 12.9192C5.74908 12.5468 6.1305 12.1646 6.50835 11.8154C6.88448 11.4678 7.2471 11.1622 7.51624 10.9431C7.6505 10.8338 7.76074 10.7467 7.83681 10.6873C7.87482 10.6577 7.90425 10.635 7.92382 10.62C7.93361 10.6125 7.94092 10.6069 7.94561 10.6033C7.94795 10.6016 7.94964 10.6003 7.95065 10.5995C7.95115 10.5991 7.95148 10.5989 7.95165 10.5988C7.95173 10.5987 7.95177 10.5987 7.95176 10.5987C7.95176 10.5987 7.95172 10.5987 7.95172 10.5987C7.95168 10.5987 7.95162 10.5988 7.5 10C7.04838 9.40122 7.0483 9.40128 7.04821 9.40135C7.04817 9.40138 7.04806 9.40146 7.04798 9.40152C7.0478 9.40166 7.04757 9.40183 7.0473 9.40203C7.04677 9.40243 7.04606 9.40297 7.04518 9.40364C7.04342 9.40497 7.04097 9.40683 7.03786 9.40919C7.03163 9.41393 7.02273 9.42071 7.01133 9.42945C6.98852 9.44693 6.95567 9.47226 6.91406 9.50473C6.83087 9.56964 6.71249 9.66323 6.56928 9.77981C6.28349 10.0124 5.89578 10.3391 5.49033 10.7138C5.0866 11.0868 4.65518 11.5168 4.28728 11.9559C3.92998 12.3824 3.58563 12.8719 3.41521 13.3624L4.83213 13.8547ZM5.81564 16.7022C5.46505 16.1248 5.14346 15.6558 4.93458 15.1488C4.739 14.674 4.68935 14.2657 4.83213 13.8547L3.41521 13.3624C3.11226 14.2344 3.26691 15.0386 3.54765 15.7201C3.81509 16.3693 4.24181 17.0003 4.5335 17.4807L5.81564 16.7022ZM11.0332 10.2493C12.5963 10.1798 15.1215 10.3799 17.0002 12.0592L17.9998 10.9408C15.6759 8.86353 12.6516 8.67581 10.9665 8.75074L11.0332 10.2493Z" fill="currentColor" />
        <path d="M14 19.5C14 18.5654 14 18.0981 14.201 17.75C14.3326 17.522 14.522 17.3326 14.75 17.201C15.0981 17 15.5654 17 16.5 17H17.5C18.4346 17 18.9019 17 19.25 17.201C19.478 17.3326 19.6674 17.522 19.799 17.75C20 18.0981 20 18.5654 20 19.5C20 20.4346 20 20.9019 19.799 21.25C19.6674 21.478 19.478 21.6674 19.25 21.799C18.9019 22 18.4346 22 17.5 22H16.5C15.5654 22 15.0981 22 14.75 21.799C14.522 21.6674 14.3326 21.478 14.201 21.25C14 20.9019 14 20.4346 14 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.5 15.5C15.5 14.6716 16.1716 14 17 14C17.8284 14 18.5 14.6716 18.5 15.5V17H15.5V15.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default TouchLocked02Icon;