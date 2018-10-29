import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRedux } from '../../hocs'
import { Container, Button } from '../../components'
import { P, H1 } from '../../components/Text'
import { incrementCounter, decrementCounter, clearCounter } from '../../reducers/counter/actions'
import { selectCounterValue } from '../../reducers/counter/selectors'
import { Navigation } from 'react-native-navigation'
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
  const handleOpenNestedCounterScreen = () => Navigation.push(componentId, {
    component: {
      name: COUNTER_NESTED_SCREEN.name,
    },
  })

  return (
    <Container marginHorizontal={20} marginVertical={20}>
      <H1>
        Counter Screen
      </H1>
      <P>
        Counter store value: {counterValue}
      </P>
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
        This is really simple screen connected to redux store. Using redux just to make one
        value in store increment would be silly. Go to the next screen if you want to see how you
        can
        use store in multiple places of your application.
      </P>
      <Button onPress={handleOpenNestedCounterScreen}>
        Dig Deeper
      </Button>
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
  connect(mapStateToProps, mapDispatchToProps),
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