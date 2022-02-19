import { SvgIcon, SvgIconProps } from "@mui/material";

type EyeIconProps = SvgIconProps;
export default function EyeRoundedGrayIcon({
  sx,
  ...props
}: EyeIconProps): JSX.Element {
  return (
    <SvgIcon
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      sx={{ height: 26, width: 26, ...sx }}
      {...props}
    >
      <circle cx="13" cy="13" r="13" fill="#D6D6D6" />
      <path
        d="M13.2726 15.2726C14.3437 15.2726 15.212 14.4043 15.212 13.3332C15.212 12.2621 14.3437 11.3939 13.2726 11.3939C12.2015 11.3939 11.3333 12.2621 11.3333 13.3332C11.3333 14.4043 12.2015 15.2726 13.2726 15.2726Z"
        fill="black"
      />
      <path
        d="M20.516 13.1684C19.9457 11.6934 18.9557 10.4177 17.6684 9.49917C16.381 8.58063 14.8528 8.05943 13.2724 8C11.6921 8.05943 10.1638 8.58063 8.87646 9.49917C7.58911 10.4177 6.59914 11.6934 6.02888 13.1684C5.99037 13.2749 5.99037 13.3916 6.02888 13.4981C6.59914 14.9732 7.58911 16.2488 8.87646 17.1673C10.1638 18.0859 11.6921 18.6071 13.2724 18.6665C14.8528 18.6071 16.381 18.0859 17.6684 17.1673C18.9557 16.2488 19.9457 14.9732 20.516 13.4981C20.5545 13.3916 20.5545 13.2749 20.516 13.1684V13.1684ZM13.2724 16.4847C12.6491 16.4847 12.0398 16.2999 11.5216 15.9536C11.0033 15.6073 10.5994 15.1151 10.3608 14.5393C10.1223 13.9634 10.0599 13.3298 10.1815 12.7184C10.3031 12.1071 10.6033 11.5456 11.044 11.1048C11.4847 10.6641 12.0463 10.3639 12.6576 10.2423C13.2689 10.1207 13.9026 10.1832 14.4784 10.4217C15.0543 10.6602 15.5465 11.0641 15.8928 11.5824C16.2391 12.1007 16.4239 12.71 16.4239 13.3333C16.4226 14.1687 16.0902 14.9695 15.4994 15.5603C14.9087 16.151 14.1078 16.4834 13.2724 16.4847V16.4847Z"
        fill="black"
      />
    </SvgIcon>
  );
}