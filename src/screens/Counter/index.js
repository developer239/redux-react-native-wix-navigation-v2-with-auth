import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, P, H1, Button } from 'components'
import { incrementCounter, decrementCounter, clearCounter } from 'modules/counter/actions'


const CounterScreen = ({ counterValue, dispatchIncrementCounter, dispatchDecrementCounter, dispatchClearCounter }) => ( // eslint-disable-line
  <Container>
    <H1>Counter Screen</H1>
    <P>Counter store value: {counterValue}</P>
    <Button onPress={dispatchIncrementCounter}>Increment Counter</Button>
    <Button onPress={dispatchDecrementCounter}>Decrement Counter</Button>
    <Button onPress={dispatchClearCounter}>Reset Counter</Button>
  </Container>
)

CounterScreen.propTypes = {
  counterValue: PropTypes.number.isRequired,
  dispatchIncrementCounter: PropTypes.func.isRequired,
  dispatchDecrementCounter: PropTypes.func.isRequired,
  dispatchClearCounter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  counterValue: state.counter.value,
})

const mapDispatchToProps = {
  dispatchIncrementCounter: incrementCounter,
  dispatchDecrementCounter: decrementCounter,
  dispatchClearCounter: clearCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen)
