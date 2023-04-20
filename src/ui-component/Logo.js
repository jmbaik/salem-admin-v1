// material-ui
import {Grid, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <Grid container direction="row" justifyContent="flex-between" alignItems="center">
            <Grid item>
                <img src={require('../assets/images/logo.png')} alt="부산초원교회" width={30} />
            </Grid>
            <Grid item>
                <Typography variant="h4" ml={2}>
                    부산초원교회
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Logo;
