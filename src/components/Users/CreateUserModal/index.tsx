import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { CreateUserForm } from './CreateUserForm';

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => any;
}

export function CreateUserModal({ isOpen, onClose }: CreateUserModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="blue.500" color="white">
          Create an User
        </ModalHeader>

        <ModalCloseButton color="white" />

        <ModalBody>
          <CreateUserForm onCloseModal={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
