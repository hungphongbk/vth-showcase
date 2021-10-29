import {DataItem} from "../assets/data";
import {motion} from "framer-motion";
import {MouseEventHandler, useState} from "react";
import {Box} from "@mui/material";
import styled, {css} from "styled-components";
import PostCardImage from "./PostCardImage";

const openSpring = {type: "spring", stiffness: 500, damping: 30};
const closeSpring = {type: "spring", stiffness: 350, damping: 35};
const variants = {
    initial: {borderRadius: 10},
    zoomed: {borderRadius: 20, position: 'fixed', zIndex: 99, top: 10, left: 10, right: 10, bottom: 10}
}

const Wrapper = styled(Box)<{ isSelected: boolean }>`
          ${props => props.isSelected && css`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99;
            padding: 10px;
          `}
    `,
    WrapperInner = styled(motion.div).attrs(() => ({}))`
      height: 100%;
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
    `,
    StyledCard = styled(motion.div)`
      background: #d0d0d0;
      height: 100%;
      width: 100%;
    `

type PostCardProps = { post: DataItem, isSelected: boolean, onClick?: MouseEventHandler }
export default function PostCard({post, isSelected, ...props}: PostCardProps) {
    const [height, setHeight] = useState(0);
    return <Box sx={{position: 'relative', height: height === 0 ? 300 : height}}>
        <Wrapper
            isSelected={isSelected ?? false}
            {...props}>
            <WrapperInner layout transition={isSelected ? openSpring : closeSpring}>
                <StyledCard>
                    <PostCardImage isSelected={isSelected}
                                   src={post.image} onLoaded={h => {
                        if (height === 0)
                            setHeight(h)
                    }}/>
                </StyledCard>
            </WrapperInner>
        </Wrapper>
    </Box>
}