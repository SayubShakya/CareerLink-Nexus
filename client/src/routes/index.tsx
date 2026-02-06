import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { ROUTES } from './routes';
import Home from '../pages/Home';
import Jobs from '../pages/jobs/Jobs';
import ContactUs from '../pages/contact-us/ContactUs';


// Placeholder components for Login and Register (can be replaced with actual components later)
const LoginPlaceholder = () => <div className="p-20 text-center">Sign In Page Placeholder</div>;
const RegisterPlaceholder = () => <div className="p-20 text-center">Sign Up Page Placeholder</div>;

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ROUTES.HOME,
                element: <Navigate to="/" replace />,
            },
            {
                path: ROUTES.LOGIN,
                element: <LoginPlaceholder />,
            },
            {
                path: ROUTES.REGISTER,
                element: <RegisterPlaceholder />,
            },
            {
                path: ROUTES.JOBS,
                element: <Jobs />,
            },
            {
                path: ROUTES.CONTACT_US,
                element: <ContactUs />,
            },
            // Add more routes here
        ],
    },
    {
        path: ROUTES.NOT_FOUND,
        element: <div className="p-20 text-center">404 Not Found</div>,
    },
]);
