import "./signup.css"
import Box from "@mui/material/Box"
import { useSelector , useDispatch } from "react-redux";
import {Navigate , Link} from "react-router-dom"
import { replace } from "lodash";
import { useState } from "react";
import {  createNewUser} from "../../../actions/users"
//  import { userSchema , Initialize } from "../../../utils/schema";
import {Formik , Field , ErrorMessage , Form} from "formik"
import * as Yup from "yup"
function Login() {
  const [email , setEmail] = useState("")
  const [username , setusername] = useState("")
  const [password , setPassword] = useState("")
  const [phone , setPhone] = useState("")
  const dispatch = useDispatch();
 

  const handleSubmit = event =>{
    console.log("sign in form")
    const user = {
      username,
      password,
      email,
      phone_number:phone
    }
    console.log(user)
    dispatch(createNewUser(user))
    event.preventDefault();
    
  }
  return (
    <Box className="contlogin" sx={{direction:"rtl"}}>
      <div className="MainContainer signin">
      <h2 className="WelcomeText">فرم ورود</h2>
      
      <Formik
       initialValues={{ username: '', password: '', email: '',phone:'' ,level:'' }}
       validationSchema={Yup.object({
         username: Yup.string("نام کاربری را درست وارد کنید").required('وارد کردن نام کاربری الزامیست'),
         email: Yup.string().required('وارد کردن ایمیل الزامیست').email("لطفا ایمیل معتبر وارد کنید"),
         password: Yup.string().max(8 ,"پسورد حداقل 8 کاراکتر باشد").required('وارد کردن پسورد الزامیست'),
         phone:Yup.string().required("وارد کردن تلفن همراه الزامیست").matches("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}","لطفا شماره تلفن معتبر وارد کنید"),
         level: Yup.string()
        })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
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

            <div className="level" for="option-1">نوع ورود خود را انتخاب کنید:</div>
            <div class="wrapper">
            <input type="radio" name="select" id="option-1" checked />
            <input type="radio" name="select" id="option-2" />
            <label for="option-1" class="option option-1">
                <div class="dot"></div>
                <span>سلامت جو</span>
                </label>
            <label for="option-2" class="option option-2">
                <div class="dot"></div>
                <span>پزشک</span>
            </label>
            </div>
                
           
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
