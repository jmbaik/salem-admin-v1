import {Outlet} from 'react-router-dom';

// material-ui
import {AppBar, Box, CssBaseline, Toolbar, useMediaQuery} from '@mui/material';
import {styled, useTheme} from '@mui/material/styles';

// project imports
import {drawerWidth} from 'atoms/constants';
import navigation from 'menu-items';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Customization from '../Customization';
import Header from './Header';
import Sidebar from './Sidebar';

// assets
import {IconChevronRight} from '@tabler/icons';
import {customizationState} from 'atoms/customizationState';
import {useRecoilState} from 'recoil';

// styles
const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`,
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px',
        },
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
        },
    }),
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const [custom, setCustom] = useRecoilState(customizationState);
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    // Handle left drawer
    const leftDrawerOpened = custom.opened;

    const handleLeftDrawerToggle = () => {
        setCustom({...custom, opened: !leftDrawerOpened});
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Sidebar
                drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
                drawerToggle={handleLeftDrawerToggle}
            />

            {/* main content */}
            <Main theme={theme} open={leftDrawerOpened}>
                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
            </Main>
            <Customization />
        </Box>
    );
};

export default MainLayout;
