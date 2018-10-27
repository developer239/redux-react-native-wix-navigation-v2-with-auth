import React from 'react'
import {
  Button,
  Form,
  FormItem,
  Input,
} from '../../components'
import { Text } from '../../components/Text'

const SignInForm = () => (
  <Form>
    <FormItem>
      <Input placeholder="Username" />
    </FormItem>
    <FormItem>
      <Input placeholder="Password" />
    </FormItem>
    <Button block>
      <Text>Sign In</Text>
    </Button>
  </Form>
)

export default SignInForm
