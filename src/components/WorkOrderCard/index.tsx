import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { RiCheckLine } from 'react-icons/ri';
import { WorkOrder } from '../../models/WorkOrder';
import { useFindAsset } from '../../services/hooks/assets/useFindAsset';
import { useUsers } from '../../services/hooks/users/useUsers';

export interface WorkOrderCardProps {
  order: WorkOrder;
}

const priorityColorsMap = new Map([
  ['low', 'green'],
  ['medium', 'yellow'],
  ['high', 'red'],
]);

export function WorkOrderCard({ order }: WorkOrderCardProps) {
  const { data: usersData } = useUsers();
  const { data: assetData } = useFindAsset(order.assetId);

  const assignedUsers = useMemo(() => {
    if (!usersData || !order) return [];

    const { assignedUserIds } = order;

    return usersData.filter((user) => assignedUserIds.includes(user.id));
  }, [usersData, order]);

  const tasksProgress = useMemo(() => {
    if (!order) return 0;

    const { checklist } = order;

    const completedTasks = checklist.filter((task) => task.completed).length;

    const percentage = (completedTasks / checklist.length) * 100;

    return Math.round(percentage);
  }, [order]);

  return (
    <Box key={order.id} shadow="lg" rounded="md" px={8} py={4}>
      <Image
        boxSize="80px"
        objectFit="cover"
        src={assetData?.image}
        alt={assetData?.name}
        rounded="lg"
      />
      <Heading as="h2" mt="1rem" size="md" fontWeight="medium" color="gray.700">
        {order.title}
      </Heading>
      <Text fontSize="md" color="gray.500" mt=".5rem" mb="1.2rem">
        {order.description}
      </Text>
      <Stack spacing={1} maxWidth="250px">
        {order.checklist.map((task, index) => (
          <Text
            key={`${task.task.trim()}-${index}`}
            flex={1}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            fontSize="sm"
          >
            •{' '}
            <Text
              as="span"
              display="inline"
              textDecor={task.completed ? 'line-through' : 'none'}
              color={task.completed ? 'gray.500' : 'gray.800'}
            >
              {task.task}
            </Text>
          </Text>
        ))}
      </Stack>

      <Flex alignItems="center" mt="1rem">
        <Progress flex={1} value={tasksProgress} rounded="md" />
        {tasksProgress === 100 ? (
          <Icon as={RiCheckLine} fontSize="1.5rem" ml="1rem" color="green" />
        ) : (
          <Text ml="1rem" fontSize="sm" fontWeight="medium" color="gray.600">
            {tasksProgress}%
          </Text>
        )}
      </Flex>

      <Flex
        w="100%"
        justifyContent="space-between"
        mt="1rem"
        alignItems="center"
      >
        <Text fontSize="sm" color="gray.500">
          Assigned to:
        </Text>
        <AvatarGroup size="sm">
          {assignedUsers.map(({ id, name }) => (
            <Avatar key={id} name={name} />
          ))}
        </AvatarGroup>
      </Flex>

      <Flex
        w="100%"
        justifyContent="space-between"
        mt="1rem"
        alignItems="center"
      >
        <Text fontSize="sm" color="gray.500">
          Priority:
        </Text>
        <Text
          fontSize="sm"
          fontWeight="medium"
          color={priorityColorsMap.get(order.priority)}
        >
          {order.priority.toUpperCase()}
        </Text>
      </Flex>
    </Box>
  );
}
