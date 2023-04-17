import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import { customizationState } from 'atoms/customizationState';
import NavigationScroll from 'layout/NavigationScroll';
import { useRecoilValue } from 'recoil';

// ==============================|| APP ||============================== //

const App = () => {
    const custom = useRecoilValue(customizationState);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(custom)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
