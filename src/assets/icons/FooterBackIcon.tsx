import * as React from "react";

function FooterBackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.063 6.563a.438.438 0 010 .875h-5.07l1.88 1.877a.438.438 0 01-.62.62L3.628 7.31a.437.437 0 010-.62l2.625-2.625a.438.438 0 01.62.62l-1.88 1.878h5.07z"
        fill="#000"
      />
    </svg>
  );
}

export default FooterBackIcon;