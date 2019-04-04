import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {Modal, Form, Input, Select} from 'antd'

const elevationPattern = /^\d+([.,]\d+)?$/

const EditForm = ({form, scan, users, onDoneEditing, onCancel}) => {
  const {
    getFieldDecorator,
  } = form

  const isExisting = scan.id !== undefined

  return (
    <Modal
      title={isExisting ? 'Edit scan' : 'New scan'}
      visible={true}
      onOk={onDoneEditing}
      onCancel={onCancel}
      okText={isExisting ? 'Update' : 'Create'}
    >
      <Form onSubmit={onDoneEditing}>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{required: true, message: 'Name is required'}],
            initialValue: scan.name,
          })(
            <Input placeholder="Name" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('scannedByUserId', {
            rules: [{required: true, message: 'Author is required'}],
            initialValue: scan.scannedByUserId,
          })(
            <Select
              placeholder="Select an author"
            >
              {users.map(user => (
                <Select.Option
                  key={user.id}
                  value={user.id}
                >
                  {user.name}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
        {!isExisting && (
          <>
            <Form.Item>
              {getFieldDecorator('elevationMin', {
                rules: [
                  {required: true, message: 'Minimum elevation is required'},
                  {pattern: elevationPattern, message: 'Minimum elevation must be a number'},
                ],
              })(
                <Input placeholder="Minimum elevation" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('elevationMax', {
                rules: [
                  {required: true, message: 'Maximum elevation is required'},
                  {pattern: elevationPattern, message: 'Maximum elevation must be a number'},
                ],
              })(
                <Input placeholder="Maximum elevation" />
              )}
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  )
}

EditForm.propTypes = {
  form: PropTypes.object.isRequired,
  scan: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  onDoneEditing: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}


const ModalForm = Form.create()(EditForm)

const EditView = ({scan, users, onCancel, onUpdate}) => {
  const formRef = useRef(null)

  const handleUpdate = () => {
    const form = formRef.current.getForm()
    form.validateFields((err, values) => {
      if (!err) {
        onUpdate({
          ...scan,
          ...values,
        })
      }
    })
  }

  return (
    <ModalForm
      ref={formRef}
      scan={scan}
      users={users}
      onDoneEditing={handleUpdate}
      onCancel={onCancel}
    />
  )
}

EditView.propTypes = {
  scan: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  onCancel: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default EditView
