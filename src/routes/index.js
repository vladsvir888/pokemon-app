import HomePage from '../pages/HomePage';
import OverviewPage from '../pages/OverviewPage';
import ErrorPage from '../pages/ErrorPage';

const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/pokemon",
        element: <OverviewPage />
    },
    {
        path: "*",
        element: <ErrorPage text="Error 404" />
    }
];

export default routes;