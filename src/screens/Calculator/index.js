import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const CalculatorScreen = ({ initialText }) => (
  <View style={styles.container}>
    <Text>Calculator Store value: {initialText}</Text>
  </View>
)

CalculatorScreen.propTypes = {
  initialText: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  initialText: state.default.value,
})

export default connect(mapStateToProps)(CalculatorScreen)
