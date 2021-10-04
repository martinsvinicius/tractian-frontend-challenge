import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { CreateAssetForm } from './CreateAssetForm';

interface CreateAssetModalProps {
  isOpen: boolean;
  onClose: () => any;
}

export function CreateAssetModal({ isOpen, onClose }: CreateAssetModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="blue.500" color="white">
          Create an Asset
        </ModalHeader>

        <ModalCloseButton color="white" />

        <ModalBody>
          <CreateAssetForm onCloseModal={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
