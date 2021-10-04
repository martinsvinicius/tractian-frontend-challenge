import {
  Flex,
  Box,
  Heading,
  Button,
  Icon,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { RiAddLine } from 'react-icons/ri';
import { Sidebar } from '../../components/Sidebar';
import { CreateUnitModal } from '../../components/Units/CreateUnitModal';
import { UnitsTable } from '../../components/Units/UnitsTable';
import { useUnits } from '../../services/hooks/units/useUnits';

const Units: NextPage = () => {
  const { data, isLoading, error } = useUnits();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" w="100%" maxWidth={1480} mx="auto" px="6">
      <CreateUnitModal isOpen={isOpen} onClose={onClose} />

      <Sidebar />

      <Box flex="1" borderRadius={8} bg="white" p="8" mt="12">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="medium" color="blue.700">
            Units
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
            Create unit
          </Button>
        </Flex>

        {isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify="center">
            <Text>Error on trying to get units</Text>
          </Flex>
        ) : (
          <UnitsTable units={data} />
        )}
      </Box>
    </Flex>
  );
};

export default Units;
