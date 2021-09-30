import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';

interface ChartProps extends HighchartsReact.Props {
  options: Highcharts.Options;
}

export function Chart({ options, ...rest }: ChartProps) {
  return (
    <HighchartsReact highcharts={Highcharts} options={options} {...rest} />
  );
}
