import Home from "./Home";
import Login from "./common/login/signup";
import Box from "@mui/material/Box"
import Topbar from "./tabbar/maintabbar";
import { Outlet } from "react-router-dom";
const MainLayout = ()=>{
    return(
        <>
            <Box sx={{width:1,height:"100vh"}}>
                <Topbar setIsSidebar={true}/>  
                <Outlet />
                
            </Box>
        </>
    )
}
export default MainLayout;