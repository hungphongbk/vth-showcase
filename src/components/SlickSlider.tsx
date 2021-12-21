import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropsWithChildren } from "react";
import deepmerge from "deepmerge";
import { styled } from "@mui/material";

type SlickSliderProps = PropsWithChildren<Partial<Settings>>;

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
} as const;

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    align-items: stretch;
  }
  .slick-list {
    margin-left: -10px;
    margin-right: -10px;
  }
  .slick-slide {
    float: unset;
    height: unset;
    margin: 0 10px;
    > div {
      height: 100%;
    }
  }
`;

export default function SlickSlider({
  children,
  ...props
}: SlickSliderProps): JSX.Element {
  return (
    <StyledSlider {...deepmerge(defaultSettings, props)}>
      {children}
    </StyledSlider>
  );
}
