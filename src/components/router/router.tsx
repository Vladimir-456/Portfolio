import React, { Suspense } from "react";
import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/home";
import NotFound from "../not-found/not-found";
import sampleProjects from "../../data/data";
import Favorite from "../pages/favorite/favorite";
import Login from "../pages/login/login";
import PrivateRoute from "../private-route/private-route";
import Projects from "../projects/projects";
import { AppRoute, links, skills } from "../../const";

const AboutMeLazy = React.lazy(() => import("../about-me/about-me"));
const ContactFormLazy = React.lazy(() => import("../contact-form/contact-form"));

const router = createBrowserRouter([
    {
        path: AppRoute.Main,
        element: 
            <Home/>
    },
    {
        path: AppRoute.AboutMe,
        element:
        <Suspense fallback={<div>Loading...</div>}> 
            <AboutMeLazy
            photo="https://avatars.githubusercontent.com/u/117089515?v=4" 
            skills={skills} 
            links={links} />
        </Suspense>,
    },
    {
        path: AppRoute.NotFound,
        element: <NotFound/>
    },
    {
        path: AppRoute.Contacts,
        element:  <Suspense fallback={<div>Loading...</div>}> 
            <ContactFormLazy/>
        </Suspense>,
    },
    {
        path: '/Portfolio',
        element: <Home/>
    },
    {
        path: AppRoute.Projects,
        element: <Projects items={sampleProjects} />
    },
    {
        path: AppRoute.Favorite,
        element: <Favorite items={sampleProjects} />
    },
    {
        path: AppRoute.Login,
        element: <Login/>
    },
    {
        path: AppRoute.Admin,
        element: <PrivateRoute><div>Admin panel</div></PrivateRoute>
    }
]);

export default router