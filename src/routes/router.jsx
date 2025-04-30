import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Profile from "../layouts/Profile";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/profile",
        element: <Profile></Profile>,
        children: [
            {
                path: "myProfile",
                element: <MyProfile></MyProfile>
            }
        ]
    }
])

export default router;