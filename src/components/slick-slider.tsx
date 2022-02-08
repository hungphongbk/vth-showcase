import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forwardRef, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";

type SlickSliderProps = PropsWithChildren<Partial<Settings>> & {
  sx?: SxProps;
  indicatorColor?: string;
};

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
} as const;

const StyledSlider = styled(Slider)<{ indicatorColor?: string }>`
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
  .slick-dots {
    display: grid !important;
    justify-content: center;
    grid-gap: 4px;
    grid-auto-flow: column;
  }
  .slick-dots li {
    &,
    button {
      width: unset;
      margin: unset;
      padding: unset;
      font-size: unset;
      line-height: unset;
    }
    &.slick-active button:before {
      width: 35px;
      opacity: 1;
    }
    button {
      &:before {
        position: relative;
        content: "";
        background-color: ${(props) => props.indicatorColor ?? "#888"};
        height: 6px;
        margin: 7px 0;
        border-radius: 3px;
        width: 6px;
        display: block;
        opacity: 0.45;
      }
    }
  }
`;

const SlickSlider = forwardRef<Slider, SlickSliderProps>(function SlickSlider(
  { children, sx, indicatorColor, ...props },
  ref
): JSX.Element {
  return (
    <Box sx={sx}>
      <StyledSlider
        ref={ref}
        indicatorColor={indicatorColor}
        {...{ ...defaultSettings, ...props }}
      >
        {children}
      </StyledSlider>
    </Box>
  );
});

export default SlickSlider;
