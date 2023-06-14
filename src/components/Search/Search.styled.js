import styled from "styled-components";

const StyledSearchForm = styled.form`
  top: 12px;
  width: 45%;
  height: 26px;
  background-color: white;
  position: absolute;
  display: flex;
  align-items: center;
  border-radius: 8px;
  visibility: hidden;

  z-index: 1;
  transition: transform 0.2s linear;
  transform: translateX(90%);



  ${({ isOpenSearchInput }) =>
  isOpenSearchInput &&
    `transform: translateX(75%); box-shadow: 3px 0px 3px 0px rgb(0 0 0 / 40%);
    visibility: visible;
    `}
`;

const StyledSearchLabel = styled.label`
padding: 0px;
padding-left: 5px;
width: 100%;
font-size: 16px;

`;

const StyledSearchInput = styled.input`
width: 100%;
outline: none;
font-size: 16px;
padding-left: 3px;
`;

const StyledSearchButton = styled.button`
margin: 0px 5px 0px 0px;
padding: 0;
color: grey;
background-color: inherit;
width: 26px;

:hover {
    cursor: pointer;
    }

`;

export {
  StyledSearchForm,
  StyledSearchLabel,
  StyledSearchInput,
  StyledSearchButton,
};
