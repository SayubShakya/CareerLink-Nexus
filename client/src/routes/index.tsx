import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { ROUTES } from './routes';
import Home from '../pages/Home';
import Jobs from '../pages/jobs/Jobs';
import ContactUs from '../pages/contact-us/ContactUs';
import ProfileSetup from '../pages/profile/ProfileSetup';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import JobseekerSignup from '../pages/signup/JobseekerSignup';
import EmployerSignup from '../pages/signup/EmployerSignup';

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
                element: <Login />,
            },
            {
                path: ROUTES.REGISTER,
                element: <Signup />,
            },
            {
                path: ROUTES.REGISTER_JOBSEEKER,
                element: <JobseekerSignup />,
            },
            {
                path: ROUTES.REGISTER_EMPLOYER,
                element: <EmployerSignup />,
            },
            {
                path: ROUTES.JOBS,
                element: <Jobs />,
            },
            {
                path: ROUTES.CONTACT_US,
                element: <ContactUs />,
            },
            {
                path: ROUTES.PROFILE_SETUP,
                element: <ProfileSetup />,
            },
            // Add more routes here
        ],
    },
    {
        path: ROUTES.NOT_FOUND,
        element: <div className="p-20 text-center">404 Not Found</div>,
    },
]);
