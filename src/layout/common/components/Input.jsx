import styled from "styled-components";

export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(23, 98, 130, 0.57);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: .7rem;
  border: none;
  outline: none;
  color: rgba(23, 98, 130,0.8);
  font-family:"BYekan";
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    background:rgba(255, 255, 255, 0.75);
    border-radius: 2rem;
  }
  &::placeholder {
    color: rgba(23, 98, 130,0.5);
    font-weight: 100;
    font-size: 1rem;
  }
`;
