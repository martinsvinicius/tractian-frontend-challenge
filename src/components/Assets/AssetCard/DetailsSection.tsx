import { Flex, Icon, Text } from '@chakra-ui/react';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaThermometerHalf } from 'react-icons/fa';
import { GrFan } from 'react-icons/gr';
import { AssetSpecifications } from '../../../models/Asset';

interface DetailsSectionProps {
  specifications: AssetSpecifications;
}

export function DetailsSection({ specifications }: DetailsSectionProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      {!!specifications.maxTemp && (
        <Text title="max temp">
          <Icon color="red.500" as={FaThermometerHalf} mr="1" />
          {`${specifications.maxTemp}°C`}
        </Text>
      )}

      {!!specifications.power && (
        <Text title="power">
          <Icon color="yellow.500" as={BsFillLightningFill} mr="1" />
          {`${specifications.power} kWh`}
        </Text>
      )}

      {!!specifications.rpm && (
        <Text title="RPM">
          <Icon color="yellow.500" as={GrFan} mr="1" />
          {`${specifications.rpm} RPM`}
        </Text>
      )}
    </Flex>
  );
}
