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
import { Unit } from '../../../models/Unit';
import { EditUnitForm } from './EditUnitForm';

interface EditUnitModalProps {
  isOpen: boolean;
  onClose: () => any;
  unit: Unit;
}

export function EditUnitModal({ isOpen, onClose, unit }: EditUnitModalProps) {
  const [isEditMode, setEditMode] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="blue.500" color="white">
          {unit.name}
        </ModalHeader>

        <ModalCloseButton color="white" />

        <ModalBody>
          <EditUnitForm
            isEditMode={isEditMode}
            setEditMode={setEditMode}
            unit={unit}
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
