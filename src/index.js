import  ReactDOM  from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FamousPlacess from "./views/FamousPlacess/FamousPlace";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Blogs from "./views/Blogs/Blogs";
import Login from "./views/Login/Login";
import TopSearchPlaces from "./views/TopSearchPlaces/TopSearchPlaces";
import VisitorReviews from "./views/VisitorReviews/VisitorReviews";
import CityPlace from "./views/CityPlace/CityPlace";
import TrendingCity from "./views/TrendingCity/TrendingCity";
import LoginOne from "./views/LoginOne/LoginOne";
import LoginTwo from "./views/LoginTwo/LoginTwo";
import ThreeLogin from "./views/ThreeLogin/ThreeLogin";
import ForgetPassword from "./views/ForgetPassword/ForgetPassword";




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
        element:<LoginOne/>
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
    },
    {
        path:'/topplaces/:id',
        element:<FamousPlacess/>
    },
    {
        path:'/logintwo',
        element:<LoginTwo/>
    },
    {
        path:'/loginthree',
        element:<ThreeLogin/>
    },
    {
        path:'/forgetpassword',
        element:<ForgetPassword/>
    }
    

])
const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
<>
<RouterProvider router={router}/>
</>
    
)
