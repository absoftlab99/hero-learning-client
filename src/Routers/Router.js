import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import FAQ from '../Pages/FAQ/FAQ';
import Courses from '../Pages/Courses/Courses';
import Error from '../Pages/Error/Error';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch("https://hero-learning-server.vercel.app/categories"),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://hero-learning-server.vercel.app/course")
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch("https://hero-learning-server.vercel.app/course")
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
                element: <Courses></Courses>,
                loader: () => fetch("https://hero-learning-server.vercel.app/course")
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://hero-learning-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }

])