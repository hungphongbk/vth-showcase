import {Box} from "@mui/material";

export default function Header(): JSX.Element {
    return <Box
        sx={{
            position: "fixed",
            display: 'grid',
            width: '100%',
            height: theme => theme.variables.appBarHeight,
            top: 0,
            gridTemplateColumns: '1fr auto 1fr'
        }}></Box>
}