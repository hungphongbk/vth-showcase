import * as React from "react";

function ShowCaseSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={11} cy={11} r={11} fill="#FFF5CA" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.595 12.74l3.228 3.227a.606.606 0 01-.856.856l-3.228-3.228a4.8 4.8 0 11.855-.856h.001zM9.8 13.4a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z"
        fill="#FFCF00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.924 12.714a5.05 5.05 0 10-1.21 1.21l3.076 3.075A.855.855 0 0017 15.79l-3.076-3.076zm-.329.025a4.825 4.825 0 00.983-3.393 4.8 4.8 0 10-1.84 4.249l3.229 3.228a.606.606 0 00.856-.856l-3.228-3.228zm-3.795.41a3.35 3.35 0 100-6.7 3.35 3.35 0 000 6.7zm2.546-.804a3.6 3.6 0 11-5.091-5.09 3.6 3.6 0 015.09 5.09z"
        fill="#FFCF00"
      />
    </svg>
  );
}

export default ShowCaseSearchIcon;