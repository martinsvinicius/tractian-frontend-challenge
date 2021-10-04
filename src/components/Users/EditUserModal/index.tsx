import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiEditLine } from 'react-icons/ri';
import { User } from '../../../models/User';
import { EditUserForm } from './EditUserForm';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => any;
  user: User;
}

export function EditUserModal({ isOpen, onClose, user }: EditUserModalProps) {
  const [isEditMode, setEditMode] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="blue.500" color="white">
          {user.name}
        </ModalHeader>

        <ModalCloseButton color="white" />

        <ModalBody>
          <EditUserForm
            isEditMode={isEditMode}
            setEditMode={setEditMode}
            user={user}
          />
        </ModalBody>

        <ModalFooter>
          {!isEditMode && (
            <Button colorScheme="blue" onClick={() => setEditMode(true)}>
              Edit <Icon ml="2" as={RiEditLine} />
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
