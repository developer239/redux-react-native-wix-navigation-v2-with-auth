import { FormikHelpers } from 'formik'

export interface ISignInFormValues {
  email: string
  password: string
}

export interface IProps {
  onSubmit: (
    values: ISignInFormValues,
    FormikHelpers: FormikHelpers<ISignInFormValues>
  ) => void
}
