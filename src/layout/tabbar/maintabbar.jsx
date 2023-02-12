import { Box, IconButton, useTheme ,ListItemButton , ListItemText , ListItemIcon} from "@mui/material";
import {HomeRounded , PermPhoneMsgRounded , LightbulbRounded , FaceRounded } from "@mui/icons-material"
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import css from './style.module.css'

const data = [
  { icon: <FaceRounded/>, label: 'ورود / ثبت نام',url:"login" },
  { icon: <PermPhoneMsgRounded />, label: 'ارتباط با ما' ,url:""},
  { icon: <LightbulbRounded />, label: 'درباره ما' ,url:""},
  { icon: <HomeRounded />, label: 'خانه' ,url:"/"},
];


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} sx={{background:theme.palette.mode ==="dark"?"rgba(0,0,0,0.05)":" rgba(255, 255, 255, 0.05)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(8.5px)",position:"fixed",top:"0px",left:"0px",width:1}}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        sx={{background:"white",color:"rgba(0,0,0,0.4)"}}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 ,color:"rgba(0,0,0,0.5)"}} placeholder="Search"/>
        <IconButton type="button" sx={{ p: 1 ,color:"rgba(0,0,0,0.5)"}}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box  sx={{display:"flex",alignItems:"center" }}>
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton> */}

        {
          data.map((item , index) => (
            <Link to={item.url} key={index} className={css.link}>
                <ListItemButton
                sx={{ py: 0, minHeight: 32, color: 'text.primary' }}
              >
                  {item.icon}
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 'small',mx:1 }}
                />
              </ListItemButton>
            </Link>
          ))
        }
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
