import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { CreateUnitForm } from './CreateUnitForm';

interface CreateUnitModalProps {
  isOpen: boolean;
  onClose: () => any;
}

export function CreateUnitModal({ isOpen, onClose }: CreateUnitModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="blue.500" color="white">
          Create an Unit
        </ModalHeader>

        <ModalCloseButton color="white" />

        <ModalBody>
          <CreateUnitForm onCloseModal={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
