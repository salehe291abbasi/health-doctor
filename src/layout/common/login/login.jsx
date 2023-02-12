import styled from "styled-components";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Input from "../components/Input";
import "./login.css"
import Box from "@mui/material/Box"
import { useSelector , useDispatch } from "react-redux";
import {showDash , hideDash} from "../../../actions/showDashboard"
import {Navigate , Link} from "react-router-dom"
import { replace } from "lodash";


function Login() {
  const dispatch = useDispatch();
  const showdashboard = useSelector(state=> state.dashboardSate)
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";


  const handleSubmit = event =>{
    
    event.preventDefault();
    dispatch(showDash());
    <Navigate to="/dashboard" replace={true}/>
    console.log("log in");
  }
  return (
    <Box className="contlogin" sx={{direction:"rtl"}}>
      <MainContainer>
      <WelcomeText>خوش آمدین</WelcomeText>
      <InputContainer onSubmit={(e)=> handleSubmit(e)}>
      
          <Input type="text" placeholder="نام" />
          <Input type="password" placeholder="پسورد" />
          <Input type="email" placeholder="ایمیل" />
          <Input type="phone" placeholder="شماره تلفن" />
    
      </InputContainer>
      <ButtonContainer>
        <Button content="ثبت نام" />
      </ButtonContainer>
    </MainContainer>
    </Box>
  );
}

const MainContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content:space-between;
  height: 70vh;
  width: 30vw;
  background: rgba(108, 171, 212, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 80vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 70vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 70vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 70vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 55vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 70vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 1rem 0 1rem 0;
  color:rgb(23, 98, 130)
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 3rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Login;
