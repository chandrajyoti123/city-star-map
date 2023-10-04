import  ReactDOM  from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Blogs from "./views/Blogs/Blogs";
import Login from "./views/Login/Login";
import TopSearchPlaces from "./views/TopSearchPlaces/TopSearchPlaces";
import VisitorReviews from "./views/VisitorReviews/VisitorReviews";
import CityPlace from "./views/CityPlace/CityPlace";
import TrendingCity from "./views/TrendingCity/TrendingCity";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/aboutus',
        element:<AboutUs/>
    },
    {
        path:'/blogs',
        element:<Blogs/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/topserchplaces',
        element:<TopSearchPlaces/>
    },
    {
        path:'/visitorreviews',
        element:<VisitorReviews/>
    },
    {
        path:'/cityplace',
        element:<CityPlace/>
    },
    {
        path:'/trendingcity/:id',
        element:<TrendingCity/>
    }

])
const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
<>
<RouterProvider router={router}/>
</>
    
)
