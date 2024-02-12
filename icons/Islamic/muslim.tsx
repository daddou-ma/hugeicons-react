import * as React from "react";
import type { SVGProps } from "react";

interface MuslimIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MuslimIcon = (props: MuslimIconProps) => {
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
        <path d="M15.5005 9.05826L15.921 6.9029C16.4159 4.36646 14.5233 2 12 2C9.47667 2 7.58414 4.36646 8.07901 6.9029L8.49952 9.05826C8.83325 10.7688 10.2983 12 12 12C13.7017 12 15.1668 10.7688 15.5005 9.05826Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.75 11.5C10.75 11.0858 10.4142 10.75 10 10.75C9.58579 10.75 9.25 11.0858 9.25 11.5H10.75ZM14.75 11.5C14.75 11.0858 14.4142 10.75 14 10.75C13.5858 10.75 13.25 11.0858 13.25 11.5H14.75ZM12.0903 15.9983L12.0612 15.2488H12.0612L12.0903 15.9983ZM11.9097 15.9983L11.9388 15.2488H11.9388L11.9097 15.9983ZM13.162 15.1181L13.7025 15.638L13.162 15.1181ZM9.25 11.5V12.7818H10.75V11.5H9.25ZM13.25 11.5V12.7818H14.75V11.5H13.25ZM12.0612 15.2488C12.0409 15.2496 12.0205 15.25 12 15.25V16.75C12.0399 16.75 12.0797 16.7492 12.1193 16.7477L12.0612 15.2488ZM11.8807 16.7477C11.9203 16.7492 11.9601 16.75 12 16.75V15.25C11.9795 15.25 11.9591 15.2496 11.9388 15.2488L11.8807 16.7477ZM13.25 12.7818C13.25 13.2975 13.2441 13.5475 13.1762 13.7763C13.1172 13.9752 12.9912 14.2139 12.6215 14.5981L13.7025 15.638C14.1709 15.1512 14.4638 14.7101 14.6143 14.2029C14.7559 13.7255 14.75 13.2429 14.75 12.7818H13.25ZM12.1193 16.7477C12.158 16.7462 12.2935 16.7443 12.4524 16.6889C12.6005 16.6373 12.7234 16.5571 12.8273 16.4773C13.0227 16.3272 13.2894 16.0676 13.7025 15.638L12.6215 14.5981C12.1968 15.0397 12.0054 15.2171 11.9135 15.2878C11.8736 15.3184 11.8954 15.2945 11.9589 15.2724C12.0331 15.2466 12.1005 15.2473 12.0612 15.2488L12.1193 16.7477ZM9.25 12.7818C9.25 13.2429 9.24409 13.7255 9.38572 14.2029C9.53619 14.7101 9.82913 15.1512 10.2975 15.638L11.3785 14.5981C11.0088 14.2139 10.8828 13.9752 10.8238 13.7763C10.7559 13.5475 10.75 13.2975 10.75 12.7818H9.25ZM11.9388 15.2488C11.8995 15.2473 11.9669 15.2466 12.0411 15.2724C12.1046 15.2945 12.1264 15.3184 12.0865 15.2878C11.9946 15.2171 11.8032 15.0397 11.3785 14.5981L10.2975 15.638C10.7106 16.0676 10.9773 16.3272 11.1727 16.4773C11.2766 16.5571 11.3995 16.6373 11.5476 16.6889C11.7065 16.7443 11.842 16.7462 11.8807 16.7477L11.9388 15.2488Z" fill="currentColor" />
        <path d="M10 14C6.75637 14.9265 5.13455 15.3897 4.14608 16.5838C4.0503 16.6995 3.95979 16.8195 3.87481 16.9433C3.11655 18.0485 3.0139 19.4587 3 22M14 14C17.2436 14.9265 18.8654 15.3897 19.8539 16.5838C19.9497 16.6995 20.0402 16.8195 20.1252 16.9433C20.8835 18.0485 20.9861 19.4587 21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 6H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MuslimIcon;