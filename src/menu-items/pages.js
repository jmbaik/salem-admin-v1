// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: '말씀/찬양',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        // {
        //     id: 'authentication',
        //     title: 'Authentication',
        //     type: 'collapse',
        //     icon: icons.IconKey,

        //     children: [
        //         {
        //             id: 'login3',
        //             title: 'Login',
        //             type: 'item',
        //             url: '/pages/login/login3',
        //             target: true
        //         },
        //         {
        //             id: 'register3',
        //             title: 'Register',
        //             type: 'item',
        //             url: '/pages/register/register3',
        //             target: true
        //         }
        //     ]
        // },
        {
            id: 'cakes',
            title: '예배',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'worship',
                    title: '주일/행사/간증',
                    type: 'item',
                    url: '/admin/worship',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true
                }
            ]
        }
    ]
};

export default pages;
