import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Profile from "../layouts/Profile";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import Order from "../pages/Dashboard/Order/Order";
import StampCard from "../pages/Dashboard/StampCard/StampCard";
import Help from "../pages/Dashboard/Help/Help";
import Setting from "../pages/Dashboard/Setting/Setting";

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
            },
            {
                path: "order",
                element: <Order></Order>
            },
            {
                path: "stampCard",
                element: <StampCard></StampCard>
            },
            {
                path: "help",
                element: <Help></Help>
            },
            {
                path: "setting",
                element: <Setting></Setting>
            }
        ]
    }
])

export default router;