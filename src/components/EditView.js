import React, {useRef} from 'react'
import {Modal, Form, Input, Select} from 'antd'

const EditForm = ({form, scan, users, onDoneEditing, onCancel}) => {
  const {
    getFieldDecorator
  } = form

  return (
    <Modal
      title="Edit scan"
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
            initialValue: scan.scannedByUserId,
          })(
            <Select>
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
