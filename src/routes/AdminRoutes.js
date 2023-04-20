import {lazy} from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import {DonationEnroll, MarriageEnroll} from 'views/enroll';
import {ComingWayGuide, NewFamilyGuide, OfferingGuide, WorshipGuide} from 'views/guide';
import {ChurchIntro, PastorIntro, ServePeopleIntro} from 'views/intro';
import {BirthNews, HospitalNews, MarriageNews, OpeningNews, PassAwayNews} from 'views/news';
import Worship from 'views/worship/Worship';

// dashboard routing
const AdminDefault = Loadable(lazy(() => import('views/admin')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
    path: 'admin',
    element: <MainLayout />,
    children: [
        {
            path: 'intro',
            children: [
                {
                    path: 'church',
                    element: <ChurchIntro />,
                },
                {
                    path: 'pastor',
                    element: <PastorIntro />,
                },
                {
                    path: 'serve-people',
                    element: <ServePeopleIntro />,
                },
            ],
        },
        {
            path: 'guide',
            children: [
                {
                    path: 'coming',
                    element: <ComingWayGuide />,
                },
                {
                    path: 'new-family',
                    element: <NewFamilyGuide />,
                },
                {
                    path: 'offering',
                    element: <OfferingGuide />,
                },
                {
                    path: 'worship',
                    element: <WorshipGuide />,
                },
            ],
        },
        {
            path: 'news',
            children: [
                {
                    path: 'birth',
                    element: <BirthNews />,
                },
                {
                    path: 'hospital',
                    element: <HospitalNews />,
                },
                {
                    path: 'marriage',
                    element: <MarriageNews />,
                },
                {
                    path: 'opening',
                    element: <OpeningNews />,
                },
                {
                    path: 'pass-away',
                    element: <PassAwayNews />,
                },
            ],
        },
        {
            path: 'enroll',
            children: [
                {
                    path: 'donation',
                    element: <DonationEnroll />,
                },
                {
                    path: 'marriage',
                    element: <MarriageEnroll />,
                },
            ],
        },
        {
            path: 'worship',
            element: <Worship />,
        },
    ],
};

export default AdminRoutes;
