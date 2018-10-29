import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRedux } from 'hocs'
import { Container, Button } from 'components'
import { P, H1 } from 'components/Text'
import { Navigation } from 'react-native-navigation'
import {
  incrementCounter,
  decrementCounter,
  clearCounter,
} from '../../ducks/actions'
import { selectCounterValue } from '../../ducks/selectors'
import { COUNTER_NESTED_SCREEN } from '../CounterNested'

export const COUNTER_SCREEN = {
  name: 'app.Counter',
  title: 'Redux Counter',
}

export const CounterScreen = ({
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

CounterScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
  counterValue: PropTypes.number.isRequired,
  dispatchIncrementCounter: PropTypes.func.isRequired,
  dispatchDecrementCounter: PropTypes.func.isRequired,
  dispatchClearCounter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  counterValue: selectCounterValue(state),
})

const mapDispatchToProps = {
  dispatchIncrementCounter: incrementCounter,
  dispatchDecrementCounter: decrementCounter,
  dispatchClearCounter: clearCounter,
}

const enhance = compose(
  withRedux,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

const EnhancedCounterScreen = enhance(CounterScreen)

// TODO: Hoist Non React Statics
EnhancedCounterScreen.options = () => ({
  topBar: {
    title: {
      text: COUNTER_SCREEN.title,
    },
  },
})

export default EnhancedCounterScreen
