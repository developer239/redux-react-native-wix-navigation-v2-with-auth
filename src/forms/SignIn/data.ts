import * as Yup from 'yup'
import { ISignInFormValues } from './types'

export const initialValues: ISignInFormValues = { email: '', password: '' }

export const getValidationSchema = () =>
  Yup.object().shape({
    email: Yup.string().required('email is required'),
  })

// TODO: Use formik components in order to remove this mess
export const isError = (id: string) => (touched: any, errors: any) => Boolean(touched[id] && errors[id])
export const isEmailError = isError('email')
