import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import { customizationState } from 'atoms/customizationState';
import config from 'config';
import { useRecoilState } from 'recoil';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const [custom, setCustom] = useRecoilState(customizationState);

    const defaultId = custom.defaultId;
    return (
        <ButtonBase disableRipple onClick={() => setCustom({ ...custom, isOpen: [defaultId] })} component={Link} to={config.defaultPath}>
            <Logo />
        </ButtonBase>
    );
};

export default LogoSection;
