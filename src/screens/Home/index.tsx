import React from 'react'
import { Text } from 'react-native'
import { Layout } from 'components/Layout'

export const HOME_TEST_ID = 'home-test-id'

export const HOME_SCREEN_NAV = {
  name: 'app.Home',
  title: 'Home',
}

export const Home = () => (
  <Layout testID={HOME_TEST_ID}>
    <Text>Hello! 👋</Text>
  </Layout>
)
