import {Box} from "@mui/material";
import Image from 'next/image';
import logo from '../assets/logo.png'

export default function Header(): JSX.Element {
    return <Box
        sx={{
            position: "fixed",
            display: 'grid',
            width: '100%',
            height: theme => theme.variables.appBarHeight,
            top: 0,
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: "center",
            background: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.11)',
            zIndex: 1
        }}>
        <Box sx={{gridColumn: 1}}></Box>
        <Box sx={{gridColumn: 2, width: '28.8vw', height: theme => theme.variables.appBarHeight}}>
            <Image src={logo} alt={'logo'} objectFit={"contain"}/>
        </Box>
        <Box sx={{gridColumn: 3}}></Box>
    </Box>
}