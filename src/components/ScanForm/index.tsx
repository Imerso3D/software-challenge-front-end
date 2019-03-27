import React from 'react'
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik'
import { FormContainer, FieldContainer, SubmitButton } from './styled'

import { StoreContext } from '../../contexts/store'

interface FormValues extends Scan {}

interface ScanFormProps {
  history: any
  match: any
}

const ScanForm: React.FC<ScanFormProps> = ({ history, match }) => {
  const { users, scans, dispatch } = React.useContext(StoreContext)

  const editableScanIndex = parseInt(match.params.index)
  const editableScan = scans[editableScanIndex]
  const editing = !isNaN(editableScanIndex)

  const handleFormikSubmit = React.useCallback(
    (values: FormValues, actions: FormikActions<FormValues>) => {
      dispatch({
        type: editing ? 'EDIT_SCAN' : 'ADD_SCAN',
        payload: {
          scan: {
            ...values,
            scannedByUserId: parseInt(values.scannedByUserId.toString()), // TODO: Fixes type incompatibility due to select options being strings
          },
          editableScanIndex,
        },
      })
      history.push('/')
    },
    []
  )

  return (
    <FormContainer>
      <h1>{editing ? `Edit: ${editableScan.name}` : 'Add scan'}</h1>
      <Formik
        initialValues={{
          name: editing ? editableScan.name : '',
          elevationMin: editing ? editableScan.elevationMin : 0,
          elevationMax: editing ? editableScan.elevationMax : 0,
          scannedByUserId: editing ? editableScan.scannedByUserId : 0,
        }}
        onSubmit={handleFormikSubmit}
        render={(formikBag: FormikProps<FormValues>) => (
          <Form>
            <Field
              name="name"
              render={({ field, form }: FieldProps<FormValues>) => (
                <FieldContainer>
                  <label htmlFor="name">Name: </label>
                  <input type="text" {...field} placeholder="Name" required />
                  {form.touched.name && form.errors.name && form.errors.name}
                </FieldContainer>
              )}
            />
            <Field
              name="elevationMin"
              render={({ field, form }: FieldProps<FormValues>) => (
                <FieldContainer>
                  <label htmlFor="name">Elevation min: </label>
                  <input
                    type="number"
                    {...field}
                    placeholder="Elevation min"
                    step="0.01"
                    required
                  />
                  {form.touched.elevationMin &&
                    form.errors.elevationMin &&
                    form.errors.elevationMin}
                </FieldContainer>
              )}
            />
            <Field
              name="elevationMax"
              render={({ field, form }: FieldProps<FormValues>) => (
                <FieldContainer>
                  <label htmlFor="name">Elevation max: </label>
                  <input
                    type="number"
                    {...field}
                    placeholder="Elevation max"
                    step="0.01"
                    required
                  />
                  {form.touched.elevationMax &&
                    form.errors.elevationMax &&
                    form.errors.elevationMax}
                </FieldContainer>
              )}
            />
            <Field
              name="scannedByUserId"
              render={({ field, form }: FieldProps<FormValues>) => (
                <FieldContainer>
                  <label htmlFor="name">User: </label>
                  <select {...field}>
                    {users.map(user => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                  {form.touched.elevationMax &&
                    form.errors.elevationMax &&
                    form.errors.elevationMax}
                </FieldContainer>
              )}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        )}
      />
    </FormContainer>
  )
}

export default ScanForm
