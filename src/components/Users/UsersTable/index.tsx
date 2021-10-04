import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { User } from '../../../models/User';
import { EditUserModal } from '../EditUserModal';

interface UsersTableProps {
  users: User[] | undefined;
}

export function UsersTable({ users }: UsersTableProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  function handleEditUser(user: User) {
    setCurrentUser(user);

    onOpen();
  }

  return (
    <Table colorScheme="blackAlpha" size="lg">
      <EditUserModal isOpen={isOpen} onClose={onClose} user={currentUser} />

      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Unit ID</Th>
          <Th>Company ID</Th>
          <Th width="8">Options</Th>
        </Tr>
      </Thead>

      <Tbody>
        {users?.map((user) => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.unitId}</Td>
            <Td>{user.companyId}</Td>
            <Td>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                cursor="pointer"
                colorScheme="blue"
                leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                onClick={() => handleEditUser(user)}
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
