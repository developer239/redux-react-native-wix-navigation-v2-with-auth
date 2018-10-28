import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Icon } from 'native-base'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  Button,
  Form,
  FormItem,
  Input,
} from '../../components'
import { Text } from '../../components/Text'

// Validation helpers
const isError = id => (touched, errors) => Boolean(touched[id] && errors[id])
const isEmailError = isError('email')

// Hint component
const Hint = styled(Text)`
  opacity: 0.65;
  font-size: 12px;
`

const SignInForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={() => Yup.object().shape({
      email: Yup.string().required('email is required'),
    })}
    onSubmit={onSubmit}
  >
    {({
      handleChange,
      handleSubmit,
      values: { email, password },
      isSubmitting,
      touched,
      errors,
    }) => (
      <Form>
        <FormItem error={isEmailError(touched, errors)}>
          <Input
            placeholder="Email"
            onChangeText={handleChange('email')}
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {isEmailError(touched, errors) && <Icon name='close-circle' />}
        </FormItem>
        <FormItem>
          <Input
            placeholder="Password"
            onChangeText={handleChange('password')}
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <Hint>hint: password</Hint>
        </FormItem>
        <Button disabled={isSubmitting} onPress={handleSubmit} block>
          <Text>{isSubmitting ? 'loading...' : 'Sign In'}</Text>
        </Button>
      </Form>
    )}
  </Formik>
)

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SignInForm
