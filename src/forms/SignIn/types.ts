import { FormikActions } from 'formik'

export interface ISignInFormValues {
  email: string
  password: string
}

export interface IProps {
  onSubmit: (
    values: ISignInFormValues,
    formikActions: FormikActions<ISignInFormValues>
  ) => void
}
