// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValues});
`

export const GradientCssContainer = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`
export const GradientHeading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 30px;
    text-align: center;
  }
`

export const ChooseDirectionText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 22px;
    text-align: center;
  }
`
export const GradientDirectionsContainer = styled.ul`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const PickColorText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-top: 0px;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
`
export const FirstColorPickerCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const ColorHexCode = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  padding: 5px;
`
export const InputElement = styled.input`
  margin: 0px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  height: 35px;
  width: 70px;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  background-color: #00c9b7;
  height: 30px;
  width: 90px;
  border: none;
  outline: none;
  border-radius: 5px;
  margin: 10px;
`
