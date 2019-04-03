import React, {useRef} from 'react'
import {Modal, Form, Input, Select} from 'antd'

const EditForm = ({form, scan, users, onDoneEditing, onCancel}) => {
  const {
    getFieldDecorator
  } = form

  const isExisting = !!scan.id

  return (
    <Modal
      title={isExisting ? 'Edit scan' : 'New scan'}
      visible={true}
      onOk={onDoneEditing}
      onCancel={onCancel}
    >
      <Form onSubmit={onDoneEditing}>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Name is required' }],
            initialValue: scan.name,
          })(
            <Input placeholder="Name" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('scannedByUserId', {
            rules: [{ required: true, message: 'Author is required' }],
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
                rules: [{ required: true, message: 'Minimum elevation is required' }],
              })(
                <Input placeholder="Minimum elevation" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('elevationMax', {
                rules: [{ required: true, message: 'Maximum elevation is required' }],
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

export default EditView
