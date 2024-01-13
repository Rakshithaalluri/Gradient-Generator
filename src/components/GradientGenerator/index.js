import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  GradientCssContainer,
  GradientHeading,
  ChooseDirectionText,
  GradientDirectionsContainer,
  PickColorText,
  ColorPickerContainer,
  FirstColorPickerCont,
  InputElement,
  ColorHexCode,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientColor: gradientDirectionsList[0].value,
    firstText: '#8ae323',
    secondText: '#014f7b',
    gradientValues: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b `,
  }

  onChangeColor = event => {
    this.setState({firstText: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondText: event.target.value})
  }

  onChangeDirectionId = direction => {
    this.setState({activeGradientColor: direction})
  }

  onGenerateButton = () => {
    const {firstText, secondText, activeGradientColor} = this.state
    this.setState({
      gradientValues: `to ${activeGradientColor}, ${firstText} , ${secondText}`,
    })
  }

  render() {
    const {
      activeGradientColor,
      gradientValues,
      firstText,
      secondText,
    } = this.state

    return (
      <GradientContainer
        gradientValues={gradientValues}
        data-testid="gradientGenerator"
      >
        <GradientCssContainer>
          <GradientHeading>Generate a CSS Color Gradient</GradientHeading>
          <ChooseDirectionText>Choose Direction</ChooseDirectionText>
          <GradientDirectionsContainer>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                generateButton={this.onChangeDirectionId}
                isActive={activeGradientColor === eachDirection.value}
              />
            ))}
          </GradientDirectionsContainer>
          <PickColorText>Pick the Colors</PickColorText>
          <ColorPickerContainer>
            <FirstColorPickerCont>
              <ColorHexCode> {firstText} </ColorHexCode>
              <InputElement
                type="color"
                value={firstText}
                onChange={this.onChangeColor}
              />
            </FirstColorPickerCont>
            <FirstColorPickerCont>
              <ColorHexCode> {secondText} </ColorHexCode>
              <InputElement
                type="color"
                value={secondText}
                onChange={this.onChangeSecondColor}
              />
            </FirstColorPickerCont>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onGenerateButton}>
            {' '}
            Generate{' '}
          </GenerateButton>
        </GradientCssContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
