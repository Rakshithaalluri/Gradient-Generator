// Style your elements here
import styled from 'styled-components'

export const DirectionListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`

export const GradientDirectionButton = styled.button`
  background-color: #ffffff79;
  height: 28px;
  width: 70px;
  border-radius: 5px;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  margin: 4px;
  border: none;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 30px;
  }
`
