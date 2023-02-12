import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import {  CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./layout/common/login/login";
import {ToastContainer} from "react-toastify"
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
// import { decodeToken } from "./utils/decodeToken";
import { addUser, clearUser } from "./actions/user";
import MainLayout from "./layout/mainlayout";
import  Home  from "./layout/Home";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const user = useSelector(state =>state.user)
  const dispatch = useDispatch();
  const [logined , setLogined] = useState(false)
  const showdashboard = useSelector(state =>state.dashboardSate)
  console.log(showdashboard)
  // useEffect(()=>{
  //   const token = localStorage.getItem("token")
  //   if(token) {
  //     const decodeToken = decodeToken(token)
  //     const dateNow = Date.now()/1000
  //       if(decodeToken.payload.exp<dateNow){
  //         localStorage.removeItem("token")
  //         dispatch(clearUser())
  //       }else{
  //         dispatch(addUser(decodeToken.payload.user))
  //       }
  //   }
  // },[])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <CssBaseline />
        <div className="app">
        
               {showdashboard &&  <Sidebar isSidebar={isSidebar} />}
                <main className="content">
                  {showdashboard && <Topbar setIsSidebar={setIsSidebar} />}
                
                  <Routes>
                    <Route path="/" element={<MainLayout />} >
                        <Route path="/" element={<Home />}/>
                        <Route path="login" element={<Login />}/>
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                  </Routes>
              
                </main>
         
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
