import { useTheme ,Box , Typography} from "@mui/material";
import Button from "@mui/material/Button";

const Home = ()=>{
    const theme = useTheme()
    return(
        <>
            <Box sx={{width:1,height:"100vh",backgroundImage:`url(${require("../assets/img/bg.jpg")})`,backgroundPosition:"center",backgroundSize:"cover",display:"flex",alignItems:"center",justifyContent:"center"}}> 
                 <Box sx={{direction:"rtl",p:3,borderRadius:4,width:"50%",height:"auto",textAlign:"center",background:theme.palette.mode ==="dark"?"rgba(0,0,0,0.05)":" rgba(255, 255, 255, 0.05)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(8.5px)",border:"1px solid white"}}>
                    <Typography variant="h1" sx={{py:3}}>نگران سلامتیت هستی ؟</Typography>
                    <Typography variant="h4">ما اینجا  کنارتیم تا بتونی  سلامتیت رو تضمین کنی زیر نظر بهترین پزشکان و متخصصان از سراسر کشور</Typography>
                    <Typography variant="h5" sx={{py:2}}>فرصت رو از دست نده و همین الان ثبت نام کن</Typography>
                    <Button sx={{borderRadius:"30px",background:"white",border:"1px solid white" , color:"rgb(102, 118, 154)",fontSize:"15px",padding:"6px 20px","&:hover ":{background:"none",color:"white"}}}>اطلاعات بیشتر</Button>
                 </Box>
            </Box>
        </>
    )
}
export default Home;