import * as React from "react";

function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 2.4c1.328 0 2.4 1.072 2.4 2.4 0 1.328-1.072 2.4-2.4 2.4a2.397 2.397 0 01-2.4-2.4c0-1.328 1.072-2.4 2.4-2.4zm0 11.36a5.76 5.76 0 01-4.8-2.576C3.224 9.592 6.4 8.72 8 8.72c1.592 0 4.776.872 4.8 2.464A5.76 5.76 0 018 13.76z"
        fill="#fff"
      />
    </svg>
  );
}

export default IconUser; 