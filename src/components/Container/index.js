import styled from 'styled-components/native'
import is from 'styled-is'

export default styled.View`
  flex: 1;
  
  ${is('center')`
    align-items: center;
    justify-content: center;
  `};
  
  ${is('marginHorizontal')`
    margin-left: ${props => props.marginHorizontal}px;
    margin-right: ${props => props.marginHorizontal}px;
  `};
  
  ${is('marginVertical')`
    margin-top: ${props => props.marginVertical}px;
    margin-bottom: ${props => props.marginVertical}px;
  `};
`
