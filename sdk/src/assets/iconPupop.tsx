import * as React from "react";

function IconPupop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={10}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 0a5 5 0 110 10A5 5 0 015 0zM2.812 4.688a.312.312 0 100 .625h3.621l-1.342 1.34a.313.313 0 10.443.443l1.875-1.875a.313.313 0 000-.442L5.534 2.904a.313.313 0 10-.443.442l1.342 1.341h-3.62z"
        fill="#000"
      />
    </svg>
  );
}

export default IconPupop;