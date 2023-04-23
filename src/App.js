import {CssBaseline, StyledEngineProvider} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import {customizationState} from 'atoms/customizationState';
import NavigationScroll from 'layout/NavigationScroll';
import {useRecoilValue} from 'recoil';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ==============================|| APP ||============================== //

const App = () => {
    const custom = useRecoilValue(customizationState);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(custom)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                    <ToastContainer position="top-center" />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
