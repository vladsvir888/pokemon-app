import HomePage from 'pages/HomePage';
import OverviewPage from 'pages/OverviewPage';
import ErrorPage from 'pages/ErrorPage';
import DetailPage from 'pages/DetailPage';
import SearchPage from 'pages/SearchPage';

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
        path: "/pokemon/:id",
        element: <DetailPage />
    },
    {
        path: "/search",
        element: <SearchPage />
    },
    {
        path: "*",
        element: <ErrorPage text="Error 404" />
    }
];

export default routes;