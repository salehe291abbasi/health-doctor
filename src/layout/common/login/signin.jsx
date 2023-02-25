import "./signup.css"
import Box from "@mui/material/Box"
import { useSelector , useDispatch } from "react-redux";
import {useNavigate , Link} from "react-router-dom"
import {Formik } from "formik"
import * as Yup from "yup"
import { loginUser } from "../../../services/userService";
import { setUser } from "../../../actions/user";
import { useEffect, useState } from "react";
// import apigetlogincode from "../../../services/httpServices"
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)


 
  return (
    <Box className="contlogin" sx={{direction:"rtl"}}>
      <div className="MainContainer signin">
      <h2 className="WelcomeText">فرم ورود</h2>
      
      <Formik
       initialValues={{ username: '', password: '' ,select:''}}
       validationSchema={Yup.object({
         username: Yup.string("نام کاربری را درست وارد کنید").required('وارد کردن نام کاربری الزامیست'),
         password: Yup.string().min(8 ,"پسورد حداقل 8 کاراکتر باشد").required('وارد کردن پسورد الزامیست'),
         select: Yup.string().required("لطفا حتما نوع ورود خود را انتخاب کنید ")
        })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async() => {
           const response =await loginUser(values.username , values.password)
           
           if(response.status ===200){
            // const user = users.find(item => item);
            const user = {username:values.username , password:values.password , email:"" , phone:""}
            dispatch(setUser(user))
            localStorage.setItem("username",values.username)
            navigate("/dashboard")
           }
           setSubmitting(false);
         }, 40);
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
           <input
             id="username"
             type="text"
             placeholder="نام کاربری"
             {...formik.getFieldProps('username')}
           />
           {formik.touched.username && formik.errors.username ? (
             <div className="error-msg">{formik.errors.username}</div>
           ) : <div className="error-msg"></div>}
           
           <input id="password" type="password" {...formik.getFieldProps('password')}  placeholder="پسورد"/>
           {formik.touched.password && formik.errors.password ? (
             <div className="error-msg">{formik.errors.password}</div>
           ) : <div className="error-msg"></div>}

            <div className="level" >نوع ورود خود را انتخاب کنید:</div>
            <div className="wrapper">
            <input type="radio" name="select" id="option-1" value="health" onChange={(e)=>formik.values.select = e.target.value}  />
            <input type="radio" name="select" id="option-2"  value="doctor" onChange={(e)=>formik.values.select = e.target.value}/>
            <label htmlFor="option-1" className="option option-1">
                <div className="dot"></div>
                <span>سلامت جو</span>
                </label>
            <label htmlFor="option-2" className="option option-2">
                <div className="dot"></div>
                <span>پزشک</span>
            </label>
            </div>
            {formik.touched.select && formik.errors.select ? (
             <div className="error-msg">{formik.errors.select}</div>
           ) : <div className="error-msg"></div>}
                
           
           <button type="submit">ثبت اطلاعات</button>
         </form>
       )}
     </Formik>
      <Box sx={{direction:"rtl", color:"rgba(23, 98, 130,0.5)"}}>آیا از قبل اکانت ندارید؟ <Link to="/signup"> از این جا اکانت بسازید </Link></Box>
    </div>
    </Box>
  );
}


export default Login;
