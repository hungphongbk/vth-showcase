import React from 'react'
import {
    Box,
    BoxProps,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Typography,
  } from "@mui/material";
import bgr1 from "../../../assets/bg-investor-1.png";
import ShowCaseIcon from "./ShowCaseIcon";
import ShowCaseSearchIcon from "./ShowCaseSearchIcon";
import { StyledBox } from '../../PostPage/styled';

function ShowCaseTab() {
    const StyledTab1 = styled(Box)`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 155.4%;
    display: flex;
    align-items: center;
    text-align: justify;
    padding: 11px 27px 11px 22px;
    color: #000000;
    `;
    const StyledBoxTab2 = styled(Box)`
    `;
    const StyledTab2 = styled(Box)`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 155.4%;
    /* or 19px */
    padding: 9px 13px 24px 14px;
    display: flex;
    align-items: center;
    text-align: justify;

    color: #FFFFFF;
    `;
    const StyledButton = styled(Box)`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    `
    const StyledBtn = styled(Box)`
    /* Yellow */
    background: #FFDE50;
    border: 3px solid #FFF5CB;
    /* Button */
    box-shadow: inset 0px -4px 6px rgba(0, 0, 0, 0.1);
    width: 183px;
    height: 30px;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    `
    return (
        <Box>
            <div>
                <StyledTab1>Chuyên trang giới thiệu sản phẩm mới showcase.vaithuhay.com là nơi giúp anh em tìm kiếm các ý tưởng sản phẩm mới lạ, độc đáo, phù hợp với nhu cầu của mình mà chưa tìm thấy nơi bán trên thị trường. Đây cũng là nơi trình bày sản phẩm sắp ra mắt của Vaithuhay và là cơ hội để anh em nhanh tay đặt trước giá hời gói Tiên Phong.</StyledTab1>
            </div>
            <StyledBox bg={bgr1} sx={{ bgcolor: "#707070" }} style={{position: "relative", margin: "0px 24px 35px 22px", display: "flex", flexDirection: "column"}}>
                <StyledBoxTab2>
                    <StyledTab2>Ngoài ra, tại đây bạn có thể đăng tải sản phẩm lên platform để được Vaithuhay propose cùng đồng hành phát triển dự án</StyledTab2>
                </StyledBoxTab2>
                <StyledBtn>
                    <StyledButton>
                        <ShowCaseIcon style={{marginLeft: "4px",marginTop: "1px", position: "absolute", left:"0", top: "0"}} />
                        ĐĂNG SẢN PHẨM
                    </StyledButton>
                </StyledBtn>
            </StyledBox>
            <StyledBox bg={bgr1} sx={{ bgcolor: "#707070" }} style={{position:"relative", margin: "0px 24px 0 22px", display: "flex", flexDirection: "column"}}>
                <StyledBoxTab2>
                    <StyledTab2>Đây cũng là nơi dành cho các Nhà đầu tư đang tìm kiếm dự án đầu tư/ kinh doanh, thì việc hợp tác với Vaithuhay vô cùng phù hợp vì chúng tôi tự tin về cách giải quyết vấn đề, kinh nghiệm, cách triển khai, nguồn vốn cũng như &quot;insight về ngành&quot; sẽ giúp anh/chị đầu tư hạn chế rủi ro hơn rất nhiều khi tự mình làm.</StyledTab2>
                </StyledBoxTab2>
                <StyledBtn>
                    <StyledButton>
                        <ShowCaseSearchIcon style={{marginLeft: "4px",marginTop: "1px", position: "absolute", left:"0", top: "0"}} />
                        TÌM HIỂU THÊM
                    </StyledButton>
                </StyledBtn>
            </StyledBox>
        </Box>
    )
}

export default ShowCaseTab
