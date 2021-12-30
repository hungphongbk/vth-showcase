import * as React from "react";

function ShowCaseIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.665 10.663h-2.288a.642.642 0 00-.612.441 1.687 1.687 0 01-1.611 1.164 1.687 1.687 0 01-1.611-1.164.642.642 0 00-.612-.44H6.643A.64.64 0 006 11.3v3.635a.64.64 0 00.643.636h9.022a.64.64 0 00.643-.636V11.3a.64.64 0 00-.643-.637z"
        fill="#FFCF00"
      />
      <path
        d="M9.364 8.786h.84v2.198c0 .094.077.17.173.17h1.553a.171.171 0 00.174-.17V8.786h.84a.175.175 0 00.154-.092.166.166 0 00-.013-.175L11.289 6.07A.177.177 0 0011.148 6a.174.174 0 00-.141.071L9.222 8.52a.166.166 0 00-.012.175c.03.057.09.092.154.092z"
        fill="#FFCF00"
      />
    </svg>
  );
}

export default ShowCaseIcon;