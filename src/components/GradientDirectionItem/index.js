// Write your code here
import {DirectionListItem, GradientDirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, generateButton, isActive} = props
  const {value, displayText} = directionDetails

  const onChangeDirection = () => {
    generateButton(value)
  }

  return (
    <DirectionListItem>
      <GradientDirectionButton
        onClick={onChangeDirection}
        type="button"
        isActive={isActive}
      >
        {displayText}
      </GradientDirectionButton>
    </DirectionListItem>
  )
}

export default GradientDirectionItem
