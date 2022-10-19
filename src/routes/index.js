import HomePage from '../pages/HomePage';
import OverviewPage from '../pages/OverviewPage';

const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/overview",
        element: <OverviewPage />
    }
];

export default routes;