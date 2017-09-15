import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Actions = ({ initialText }) => (
  <View style={styles.container}>
    <Text>Store value: {initialText}</Text>
  </View>
)

Actions.propTypes = {
  initialText: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  initialText: state.default.value,
})

export default connect(mapStateToProps)(Actions)
