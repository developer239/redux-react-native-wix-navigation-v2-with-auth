import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, P, H1 } from 'components'


const CalculatorScreen = ({ initialText }) => (
  <Container>
    <H1>Calculator Screen</H1>
    <P>Calculator Store value: {initialText}</P>
  </Container>
)

CalculatorScreen.propTypes = {
  initialText: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  initialText: state.calculator.value,
})

export default connect(mapStateToProps)(CalculatorScreen)
