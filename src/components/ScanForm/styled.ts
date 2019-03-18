import styled from '@emotion/styled'
import Button from '../Button'

export const FormContainer = styled.div`
  input,
  select {
    padding: 8px;
    margin: 4px;
  }
`

export const FieldContainer = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
`

export const SubmitButton = styled(Button)`
  margin: 16px 0;
`
