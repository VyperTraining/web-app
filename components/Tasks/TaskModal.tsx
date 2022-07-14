import { useState } from 'react'

import { Textarea } from '@chakra-ui/react'

import Modal from '../Layout/Modal'

type Props = {
  title: string
  isOpen: boolean
  isLoading?: boolean
  onClose: () => any
  onSubmit: (content: string) => any
}

export default function TaskModal(props: Props) {
  const submitTaskChange = () => {
    props.onSubmit(value)
  }

  const [value, setValue] = useState('')

  return (
    <Modal
      title="Add new Task"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonTitle="Save"
      onClickButton={submitTaskChange}
      isLoading={props.isLoading}>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={128}
        placeholder="What's your task?"
      />
    </Modal>
  )
}
