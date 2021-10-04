import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { Unit } from '../../../models/Unit';
import { EditUnitModal } from '../EditUnitModal';

interface UnitsTableProps {
  units: Unit[] | undefined;
}

export function UnitsTable({ units }: UnitsTableProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentUnit, setCurrentUnit] = useState<Unit>({} as Unit);

  function handleEditUnit(unit: Unit) {
    setCurrentUnit(unit);
    onOpen();
  }

  return (
    <Table colorScheme="blackAlpha" size="lg">
      <EditUnitModal isOpen={isOpen} onClose={onClose} unit={currentUnit} />

      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Name</Th>
          <Th>Company ID</Th>
          <Th width="8">Options</Th>
        </Tr>
      </Thead>

      <Tbody>
        {units?.map((unit) => (
          <Tr key={unit.id}>
            <Td>{unit.id}</Td>
            <Td>{unit.name}</Td>
            <Td>{unit.companyId}</Td>
            <Td>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                cursor="pointer"
                colorScheme="blue"
                leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                onClick={() => handleEditUnit(unit)}
              >
                Edit
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
