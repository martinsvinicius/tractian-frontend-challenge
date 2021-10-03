import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Icon,
  Box,
  Text,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiEditLine } from 'react-icons/ri';
import { Asset } from '../../../models/Asset';
import { AssetForm } from './AssetForm';

interface AssetModalProps {
  isOpen: boolean;
  onClose: () => any;
  asset: Asset;
}

export function AssetModal({ isOpen, onClose, asset }: AssetModalProps) {
  const [isEditMode, setEditMode] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="blue.500" color="white">
          {asset.name}
        </ModalHeader>

        <ModalCloseButton color="white" />

        <ModalBody>
          <Box mt="4">
            <Text fontWeight="medium" fontSize="1.2rem" mb="2">
              Sensors
            </Text>
            <SimpleGrid columns={3} spacing="2" alignContent="center">
              {asset.sensors.map((sensor) => (
                <Badge
                  key={sensor}
                  variant="solid"
                  textAlign="center"
                  colorScheme="gray"
                  ml="2"
                >
                  {sensor}
                </Badge>
              ))}
            </SimpleGrid>
          </Box>

          <AssetForm isEditMode={isEditMode} asset={asset} />
        </ModalBody>

        <ModalFooter>
          {!isEditMode && (
            <Button colorScheme="blue" onClick={() => setEditMode(true)}>
              Edit <Icon ml="2" as={RiEditLine} />
            </Button>
          )}

          {isEditMode && (
            <>
              <Button
                colorScheme="gray"
                mr="2"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="green" onClick={handleSubmit(onSubmit)}>
                Save
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
