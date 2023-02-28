import { Flex, SimpleGrid, Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useMemo } from 'react';
import { Chart } from '../components/Chart';
import { Sidebar } from '../components/Sidebar';
import { useAssets } from '../services/hooks/assets/useAssets';

const Dashboard: NextPage = () => {
  const { data: assetsData } = useAssets();

  const chartOptions = useMemo<Highcharts.Options | undefined>(() => {
    if (!assetsData?.map) return undefined;

    return {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: 'Health score',
        },
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%',
          },
        },
      },
      series: [
        {
          name: 'Assets',
          data: assetsData.map((asset) => ({
            name: asset.name,
            y: asset.healthscore,
          })),
        },
      ],
    };
  }, [assetsData]);

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
        <Box
          height="fit-content"
          p={['6', '8']}
          shadow="lg"
          rounded="md"
          bg="white"
        >
          <Heading fontSize="lg" mb="4">
            Assets chart
          </Heading>

          {chartOptions && <Chart options={chartOptions} />}
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default Dashboard;
