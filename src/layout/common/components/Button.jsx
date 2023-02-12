import styled from "styled-components";
import { useDispatch } from "react-redux";


export default function Button({ content }) {


  return <StyledButton > {content}</StyledButton>;
}

const StyledButton = styled.button`
  background: rgb(23, 98, 130);
  text-transform: uppercase;
  width: 65%;
  height: 3rem;
  border: none;
  font-size:15px;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  transition:0.2s ease;
  font-family:"BYekan";
  font-weight:400;
  &:hover{
    background: none ;
    border:2px solid rgb(23, 98, 130);
    color:rgb(23, 98, 130);
  }
`;
