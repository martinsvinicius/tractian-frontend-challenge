import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Chart } from '../components/Chart';
import { Sidebar } from '../components/Sidebar';

const options: Highcharts.Options = {
  title: {
    text: '',
  },
  series: [
    {
      type: 'line',
      data: [1, 2, 3],
    },
  ],
};

const Dashboard: NextPage = () => {
  return (
    <Flex minH="100vh" w="100%" maxWidth={1480} mx="auto" px="6">
      <Sidebar />

      <SimpleGrid
        flex="1"
        mt="12"
        gap="4"
        minChildWidth="320px"
        align="flex-start"
      >
        <Box height="fit-content" p={['6', '8']} shadow="lg" rounded="md" bg="white">
          <Text fontSize="lg" mb="4">
            Assets chart
          </Text>

          <Chart options={options} />
        </Box>

        <Box height="fit-content" p={['6', '8']} shadow="lg" rounded="md" bg="white">
          <Text fontSize="lg" mb="4">
            Assets chart
          </Text>

          <Chart options={options} />
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default Dashboard;
