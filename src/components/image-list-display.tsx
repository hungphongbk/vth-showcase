import { Component } from "react";
import { ImageList, Showcase } from "../types/graphql";
import SlickSlider from "./slick-slider";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { Box } from "@mui/material";
import VthNextImage from "./vth-next-image";

type ImageListDisplayProps = {
  showcase: Pick<Showcase, "name">;
  imageList: ImageList;
};

export default class ImageListDisplay extends Component<
  ImageListDisplayProps,
  { mainRef: any; childRef: any }
> {
  #mainRef: any;
  #childRef: any;

  constructor(props: ImageListDisplayProps | Readonly<ImageListDisplayProps>) {
    super(props);
    this.state = {
      mainRef: null,
      childRef: null,
    };
  }
  componentDidMount() {
    this.setState({
      mainRef: this.#mainRef,
      childRef: this.#childRef,
    });
  }

  render() {
    return (
      <>
        <SlickSlider
          key={"main"}
          ref={(el) => (this.#mainRef = el)}
          slidesToShow={1}
          asNavFor={this.state.childRef}
          dots={false}
        >
          {this.props.imageList.images.map((image, index) => (
            <AspectRatio
              key={`${image.id}_main`}
              ratio={`${image.width}/${image.height}`}
            >
              <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
                <Box sx={{ position: "relative" }}>
                  <VthNextImage
                    src={image.path}
                    alt={`${this.props.showcase.name} image list ${index + 1}`}
                    width={image.width}
                    height={image.height}
                    objectFit={"cover"}
                    sizes={"100vw"}
                    placeholder={"blur"}
                    blurDataURL={image.preloadUrl}
                  />
                </Box>
              </Box>
            </AspectRatio>
          ))}
        </SlickSlider>
        <SlickSlider
          key={"child"}
          ref={(el) => (this.#childRef = el)}
          slidesToShow={5}
          asNavFor={this.state.mainRef}
          sx={{ pb: 3 }}
        >
          {this.props.imageList.images.map((image, index) => (
            <AspectRatio
              key={`${image.id}_thumb`}
              ratio={`${image.width}/${image.height}`}
            >
              <Box sx={{ borderRadius: 1, overflow: "hidden" }}>
                <Box sx={{ position: "relative" }}>
                  <VthNextImage
                    src={image.path}
                    alt={`${this.props.showcase.name} image list thumbnail ${
                      index + 1
                    }`}
                    width={image.width}
                    height={image.height}
                    objectFit={"cover"}
                    sizes={"20vw"}
                    placeholder={"blur"}
                    blurDataURL={image.preloadUrl}
                  />
                </Box>
              </Box>
            </AspectRatio>
          ))}
        </SlickSlider>
      </>
    );
  }
}
