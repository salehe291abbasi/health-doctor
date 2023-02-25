import React, { useState } from "react";
import "./style.css"
import {
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
  Box
} from "@mui/material";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "مریم شیخ سفلی",
    email: "johndoe@example.com",
    phoneNumber: "09211638463",
    avatarUrl: require("../../assets/img/2.jpg"),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Box>
        <Grid container spacing={3} >
        <Grid item xs={12} sm={4}>
            <Avatar alt="User Profile" src={formData.avatarUrl} sx={{ width: 200, height: 200, mx: "auto" }} />
            <Button variant="contained" component="label" sx={{background:"#70d8bd",mt:2,color:"text.primary","&:hover":{background:"#359078"}}}>
            اپلود پروفایل
            <input type="file" hidden />
            </Button>
        </Grid>
        <Grid item xs={12} sm={8}>
        <Box  className="info" sx={{direction:"rtl",width:"90%",margin:"100px auto"}}>
              <Typography className="subinfo" sx={{color:"#70d8bd"}} variant="h4">اطلاعات پروفایل</Typography>
              <Typography className="subinfo" variant="subtitle1">نام: {formData.name}</Typography>
              <Typography className="subinfo" variant="subtitle1">ایمیل: {formData.email}</Typography>
              <Typography className="subinfo" variant="subtitle1">
              شماره تلفن: {formData.phoneNumber}
              </Typography>
            </Box>
           
        </Grid>
        <Grid item xs={12} sx={{mb:4}}>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{direction:"rtl"}}>
                <Typography variant="h5" sx={{color:"#70d8bd"}}>تغییر پروفایل</Typography>
                </Grid>
                <Grid item xs={12} sx={{direction:"rtl"}}>
                <TextField
                    label="نام کاربری"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                </Grid>
                <Grid item xs={12} sx={{direction:"rtl"}}>
                <TextField
                    label="ایمیل"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                </Grid>
                <Grid item xs={12} sx={{direction:"rtl"}}>
                <TextField
                    label="تلفن همراه"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                </Grid>
                <Grid item xs={12} sx={{direction:"rtl"}}>
                <Button variant="contained" sx={{background:"#70d8bd",color:"text.primary","&:hover":{background:"#359078"}}} type="submit">
                    ذخیره تغییرات
                </Button>
                </Grid>
            </Grid>
            </form>
        </Grid>
        </Grid>
    </Box>
  );
};

export default Profile;