import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, P, H1, Button } from 'components'
import { incrementCounter, decrementCounter, clearCounter } from 'modules/calculator/actions'


const CalculatorScreen = ({ counterValue, dispatchIncrementCounter, dispatchDecrementCounter, dispatchClearCounter }) => (
  <Container>
    <H1>Calculator Screen</H1>
    <P>Calculator Store value: {counterValue}</P>
    <Button onPress={dispatchIncrementCounter}>Increment Counter</Button>
    <Button onPress={dispatchDecrementCounter}>Decrement Counter</Button>
    <Button onPress={dispatchClearCounter}>Clear Counter Counter</Button>
  </Container>
)

CalculatorScreen.propTypes = {
  counterValue: PropTypes.number.isRequired,
  dispatchIncrementCounter: PropTypes.func.isRequired,
  dispatchDecrementCounter: PropTypes.func.isRequired,
  dispatchClearCounter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  counterValue: state.calculator.value,
})

const mapDispatchToProps = {
  dispatchIncrementCounter: incrementCounter,
  dispatchDecrementCounter: decrementCounter,
  dispatchClearCounter: clearCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen)
