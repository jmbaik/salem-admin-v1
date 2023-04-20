// assets
import {IconKey} from '@tabler/icons';

// constant
const icons = {
    IconKey,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const admins = {
    id: 'admin',
    title: '관리자',
    type: 'group',
    children: [
        {
            id: 'intro',
            title: '소개',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'church',
                    title: '교회소개',
                    type: 'item',
                    url: '/admin/intro/church',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'pastor',
                    title: '담임/원로 목사소개',
                    type: 'item',
                    url: '/admin/intro/pastor',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'serve-people',
                    title: '섬기는분',
                    type: 'item',
                    url: '/admin/intro/serve-people',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
            ],
        },
        {
            id: 'guide',
            title: '안내',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'coming',
                    title: '오시는 길',
                    type: 'item',
                    url: '/admin/guide/coming',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'new-family',
                    title: '새가족 안내',
                    type: 'item',
                    url: '/admin/guide/new-family',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'offering',
                    title: '헌금 안내',
                    type: 'item',
                    url: '/admin/guide/offering',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'worship',
                    title: '예배 안내',
                    type: 'item',
                    url: '/admin/guide/worship',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
            ],
        },
        {
            id: 'news',
            title: '소식',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'birth',
                    title: '출생',
                    type: 'item',
                    url: '/admin/news/birth',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'hospital',
                    title: '입원',
                    type: 'item',
                    url: '/admin/news/hospital',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'marriage',
                    title: '결혼',
                    type: 'item',
                    url: '/admin/news/marriage',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'opening',
                    title: '개업',
                    type: 'item',
                    url: '/admin/news/opening',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
                {
                    id: 'pass-away',
                    title: '장례/소천',
                    type: 'item',
                    url: '/admin/news/pass-away',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true,
                },
            ],
        },
    ],
};

export default admins;
