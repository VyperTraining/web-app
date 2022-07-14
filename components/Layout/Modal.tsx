import {
  Button,
  Modal as CHModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

type Props = {
  title: string
  buttonTitle?: string
  children: any
  isOpen: boolean
  isLoading?: boolean
  onClose: () => any
  onClickButton: () => any
}

export default function Modal(props: Props) {
  return (
    <>
      <CHModal isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.children}</ModalBody>

          {props.buttonTitle ? (
            <ModalFooter>
              <Button isLoading={props.isLoading} onClick={props.onClickButton}>
                {props.buttonTitle}
              </Button>
            </ModalFooter>
          ) : null}
        </ModalContent>
      </CHModal>
    </>
  )
}
