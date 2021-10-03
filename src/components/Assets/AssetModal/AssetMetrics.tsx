import { Box } from '@chakra-ui/react';
import { Chart } from '../../Chart';

interface AssetMetrics {
  totalCollectsUptime: number;
  totalUptime: number;
  lastUptimeAt: string;
}

const chartOptions: Highcharts.Options = {
  
}

export function AssetMetrics() {
  return <Box>
    <Chart options={chartOptions} />
  </Box>;
}
