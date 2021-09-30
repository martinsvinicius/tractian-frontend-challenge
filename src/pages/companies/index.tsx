import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Sidebar } from '../../components/Sidebar';

const Companies: NextPage = () => {
  return (
    <Flex minH="100vh" w="100%" maxWidth={1480} mx="auto" px="6">
      <Sidebar />
    </Flex>
  );
};

export default Companies;
