import React, { ComponentType, FunctionComponent } from 'react'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRedux } from '../../../../hocs'
import {
  Container,
  Button,
} from '../../../../components'
import {
  P,
  H1,
} from '../../../../components/Text'
import {
  incrementCounter,
  decrementCounter,
  clearCounter,
} from '../../ducks/actions'
import { selectCounterValue } from '../../ducks/selectors'
import { COUNTER_NESTED_SCREEN } from '../CounterNested'
import { IAppStore } from '../../../../reducer'
import { IProps } from './types'

export const COUNTER_SCREEN = {
  name: 'app.Counter',
  title: 'Redux Counter',
}

export const CounterScreen: FunctionComponent<IProps> = ({
  counterValue,
  dispatchIncrementCounter,
  dispatchDecrementCounter,
  dispatchClearCounter,
  componentId,
}) => {
  const handleOpenNestedCounterScreen = () =>
    Navigation.push(componentId, {
      component: {
        name: COUNTER_NESTED_SCREEN.name,
      },
    })

  return (
    <Container marginHorizontal={20} marginVertical={20}>
      <H1>Counter Screen</H1>
      <P>Counter store value: {counterValue}</P>
      <Button block onPress={dispatchIncrementCounter}>
        Increment Counter
      </Button>
      <Button block onPress={dispatchDecrementCounter}>
        Decrement Counter
      </Button>
      <Button block onPress={dispatchClearCounter}>
        Reset Counter
      </Button>
      <P>
        This screen is connected to the redux store. Using redux just to control
        one value would be unreasonable. Continue to the next screen if you want
        to see a real redux power in action.
      </P>
      <Button onPress={handleOpenNestedCounterScreen}>Continue</Button>
    </Container>
  )
}

const mapStateToProps = (state: IAppStore) => ({
  counterValue: selectCounterValue(state),
})

const mapDispatchToProps = {
  dispatchIncrementCounter: incrementCounter,
  dispatchDecrementCounter: decrementCounter,
  dispatchClearCounter: clearCounter,
}

const EnhancedCounterScreen = compose(
  withRedux,
  connect(mapStateToProps, mapDispatchToProps),
)(CounterScreen) as ComponentType

// @ts-ignore
EnhancedCounterScreen.options = () => ({
  topBar: {
    title: {
      text: COUNTER_SCREEN.title,
    },
  },
})

export default EnhancedCounterScreen
