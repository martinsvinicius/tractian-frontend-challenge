import {
  Box,
  Image,
  Flex,
  Badge,
  Text,
  CircularProgress,
  CircularProgressLabel,
  useDisclosure,
} from '@chakra-ui/react';
import { Asset } from '../../../models/Asset';
import { AssetModal } from '../AssetModal';
import { DetailsSection } from './DetailsSection';

interface AssetCardProps {
  asset: Asset;
}

interface StatusColors {
  [key: string]: string;
}

let statusColors: StatusColors = {
  inAlert: 'yellow',
  inOperation: 'green',
  inDowntime: 'red',
};

export function AssetCard({ asset }: AssetCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        h="fit-content"
        shadow="lg"
        rounded="md"
        minW="350px"
        m="0 auto"
        cursor="pointer"
        transitionProperty="all"
        transitionDuration="0.2s"
        _hover={{
          bg: 'blue.50',
          transform: 'scale(1.04)',
        }}
        onClick={onOpen}
      >
        <Image
          src={asset.image}
          roundedTop="md"
          w="100%"
          h="auto"
          maxH="260px"
        />

        <Box p={['2', '4']}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight="medium">
              {asset.name}
              <Badge
                variant="solid"
                colorScheme={statusColors[asset.status]}
                ml="2"
              >
                {asset.status}
              </Badge>
              <Badge variant="solid" colorScheme="blue" ml="2">
                {asset.model}
              </Badge>
            </Text>

            <CircularProgress
              value={asset.healthscore}
              color="blue.500"
              trackColor="blue.50"
            >
              <CircularProgressLabel fontWeight="bold" color="blue.500">
                {`${asset.healthscore}%`}
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>

          <Text textAlign="left" fontWeight="medium">
            Details
          </Text>

          <DetailsSection specifications={asset.specifications} />
        </Box>
      </Box>

      <AssetModal isOpen={isOpen} onClose={onClose} asset={asset} />
    </>
  );
}
