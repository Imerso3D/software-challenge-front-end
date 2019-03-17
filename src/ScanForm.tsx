import React from 'react'
import { StoreContext } from './contexts/store'
import styled from '@emotion/styled'

const Form = styled.form`
  display: grid;
`

const ScanForm = () => {
  const { users, dispatch } = React.useContext(StoreContext)

  const handleSubmit = React.useCallback((e: any) => {
    e.preventDefault()
    const [
      nameInput,
      elevationMinInput,
      elevationMaxInput,
      userIdSelect,
    ] = Array.from(e.target.elements)

    try {
      dispatch({
        type: 'ADD_SCAN',
        payload: {
          name: nameInput.value,
          elevationMin: parseFloat(elevationMinInput.value),
          elevationMax: parseFloat(elevationMaxInput.value),
          scannedByUserId: parseInt(userIdSelect.value),
        },
      })
    } catch (e) {
      console.error('validation error')
    }
  }, [])

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required /> <br />
      <label htmlFor="elevationMin">Elevation</label>
      <input type="number" id="elevationMin" step="0.01" required />
      <input type="number" id="elevationMax" step="0.01" required /> <br />
      <select>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <button>add</button>
    </Form>
  )
}

export default ScanForm
