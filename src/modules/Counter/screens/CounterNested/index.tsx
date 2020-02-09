import React, { ComponentType, FunctionComponent } from 'react'
import { Image } from 'react-native'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRedux } from '../../../../hocs'
import { Container } from '../../../../components'
import { P, H1 } from '../../../../components/Text'
import { selectCounterValue } from '../../ducks/selectors'
import { IAppStore } from '../../../../reducer'
import { IProps } from './types'

export const COUNTER_NESTED_SCREEN = {
  name: 'app.CounterNested',
  title: 'Nested Counter',
}

export const CounterNestedScreen: FunctionComponent<IProps> = ({ counterValue }) => (
  <Container marginHorizontal={20} marginVertical={20}>
    <H1>It works!</H1>
    <P>Counter store value: {counterValue}</P>
    <Image source={{ uri: './parrot.gif' }} />
  </Container>
)

const mapStateToProps = (state: IAppStore) => ({
  counterValue: selectCounterValue(state),
})

const EnhancedCounterNestedScreen = compose(
  withRedux,
  connect(mapStateToProps),
)(CounterNestedScreen) as ComponentType

// @ts-ignore
EnhancedCounterNestedScreen.options = () => ({
  topBar: {
    title: {
      text: COUNTER_NESTED_SCREEN.title,
    },
  },
})

export default EnhancedCounterNestedScreen
