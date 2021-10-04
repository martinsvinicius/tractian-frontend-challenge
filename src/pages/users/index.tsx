import {
  Flex,
  Box,
  Heading,
  Button,
  Icon,
  useDisclosure,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { RiAddLine } from 'react-icons/ri';
import { Sidebar } from '../../components/Sidebar';
import { CreateUserModal } from '../../components/Users/CreateUserModal';
import { UsersTable } from '../../components/Users/UsersTable';
import { useUsers } from '../../services/hooks/users/useUsers';

const Users: NextPage = () => {
  const { data, isLoading, error } = useUsers();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" w="100%" maxWidth={1480} mx="auto" px="6">
      <CreateUserModal isOpen={isOpen} onClose={onClose} />

      <Sidebar />

      <Box flex="1" borderRadius={8} bg="white" p="8" mt="12">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="medium" color="blue.700">
            Users
          </Heading>

          <Button
            as="a"
            size="md"
            fontSize="md"
            cursor="pointer"
            colorScheme="blue"
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            onClick={onOpen}
          >
            Create user
          </Button>
        </Flex>

        {isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify="center">
            <Text>Error on trying to get users</Text>
          </Flex>
        ) : (
          <UsersTable users={data} />
        )}
      </Box>
    </Flex>
  );
};

export default Users;
