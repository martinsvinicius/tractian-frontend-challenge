import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  Stack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Sidebar } from '../../components/Sidebar';
import { WorkOrderCard } from '../../components/WorkOrderCard';
import { useWorkOrders } from '../../services/hooks/workorders/useWorkOrders';

const generateSkeletons = (length: number) => {
  return Array.from({ length }, () => (
    <Box shadow="lg" rounded="md" px={8} py={8}>
      <SkeletonCircle size="80px" mb="1rem" />
      <Stack spacing={4}>
        <Skeleton height="25px" mb=".5rem" />
        <Skeleton height="10px" />
        <Skeleton height="10px" />
        <Skeleton height="10px" />
      </Stack>
    </Box>
  ));
};

const Workorders: NextPage = () => {
  const { data: ordersData, isLoading } = useWorkOrders();

  return (
    <Flex minH="100vh" w="100%" maxWidth={1480} mx="auto" px="6">
      <Sidebar />

      <Box flex="1" borderRadius={8} bg="white" p="8" mt="12">
        <SimpleGrid columns={3} spacing={8}>
          {isLoading && generateSkeletons(4)}
          {!isLoading &&
            ordersData?.map((order) => (
              <WorkOrderCard
                key={order.id}
                order={order}
              />
            ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Workorders;
