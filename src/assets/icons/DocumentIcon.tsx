import { SvgIcon, SvgIconProps } from "@mui/material";

type DocumentIconProps = SvgIconProps;
export default function DocumentIcon(props: DocumentIconProps): JSX.Element {
  return (
    <SvgIcon width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
      <circle cx="11" cy="11" r="11" fill="#FFF5CA" />
      <path
        d="M12.6208 5H6.76259C6.55629 5.00562 6.36048 5.09475 6.21771 5.24802C6.07494 5.40129 5.99674 5.60633 6.0001 5.81857V16.1814C5.99674 16.3937 6.07494 16.5987 6.21771 16.752C6.36048 16.9053 6.55629 16.9944 6.76259 17H15.2374C15.4437 16.9944 15.6395 16.9053 15.7823 16.752C15.9251 16.5987 16.0033 16.3937 15.9999 16.1814V8.39429L12.6208 5ZM12.25 8.85714V5.78857L15.2916 8.85714H12.25Z"
        fill="#FFCF00"
      />
    </SvgIcon>
  );
}
