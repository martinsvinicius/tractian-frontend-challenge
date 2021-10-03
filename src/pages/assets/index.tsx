import { Flex, Grid, Spinner, Text, Icon, Button, Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { RiAddLine } from 'react-icons/ri';
import { AssetCard } from '../../components/Assets/AssetCard';
import { Sidebar } from '../../components/Sidebar';
import { useAssets } from '../../services/hooks/assets/useAssets';

const Assets: NextPage = () => {
  const { data: assets, isLoading, error } = useAssets();

  return (
    <Flex minH="100vh" w="100%" maxWidth={1480} mx="auto" px="6">
      <Sidebar />

      {isLoading ? (
        <Flex w="100%" alignItems="center" justifyContent="center">
          <Spinner size="xl" color="blue.500" />
        </Flex>
      ) : error ? (
        <Flex w="100%" alignItems="center" justifyContent="center">
          <Text fontSize="1.5rem" color="blue.500" fontWeight="medium">
            Error on trying to get assets
          </Text>
        </Flex>
      ) : (
        <Box mt="5rem" w="100%" display="flex" flexDir="column">
          <Button
            as="a"
            size="md"
            fontSize="md"
            cursor="pointer"
            colorScheme="blue"
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            mb="8"
            ml="auto"
          >
            Create
          </Button>

          <Grid
            align="center"
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap="6"
            flex="1"
          >
            {assets?.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </Grid>
        </Box>
      )}
    </Flex>
  );
};

export default Assets;
