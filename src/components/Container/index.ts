import styled from 'styled-components/native'
import is from 'styled-is'

interface IProps {
  isCenter?: boolean
  marginHorizontal?: number
  marginVertical?: number
}

export const Container = styled.View<IProps>`
  flex: 1;
  ${is('isCenter')`
    align-items: center;
    justify-content: center;
  `};
  ${is('marginHorizontal')`
    margin-left: ${(props: IProps) => `${props.marginHorizontal}`}px;
    margin-right: ${(props: IProps) => `${props.marginHorizontal}`}px;
  `};
  ${is('marginVertical')`
    margin-top: ${(props: IProps) => `${props.marginVertical}`}px;
    margin-bottom: ${(props: IProps) => `${props.marginVertical}`}px;
  `};
`
