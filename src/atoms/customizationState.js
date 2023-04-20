import config from 'config';

const {atom} = require('recoil');

export const customizationState = atom({
    key: 'customizationState',
    default: {
        isOpen: [],
        defaultId: 'default',
        fontFamily: config.fontFamily,
        borderRadius: config.borderRadius,
        opened: true,
    },
});
