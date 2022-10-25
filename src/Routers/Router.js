import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import FAQ from '../Pages/FAQ/FAQ';
import Courses from '../Pages/Courses/Courses';
import Error from '../Pages/Error/Error';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course-details',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }

])