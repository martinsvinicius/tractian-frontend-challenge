import {
  Flex,
  Grid,
  Box,
  Image,
  Text,
  Badge,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Sidebar } from '../../components/Sidebar';

const Assets: NextPage = () => {
  return (
    <Flex minH="100vh" w="100%" maxWidth={1480} mx="auto" px="6">
      <Sidebar />

      <Grid
        mt="5rem"
        align="self-start"
        templateColumns="repeat(4, 1fr)"
        gap="6"
        flex="1"
      >
        <Box h="fit-content" shadow="lg" rounded="md" minW="350px">
          <Image
            src="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
            roundedTop="md"
            w="100%"
            h="auto"
          />

          <Box p={['2', '4']}>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="medium">
                Motor H13D-1
                <Badge variant="solid" colorScheme="yellow" ml="2">
                  In Alert
                </Badge>
                <Badge variant="solid" colorScheme="blue" ml="2">
                  Motor
                </Badge>
              </Text>

              <CircularProgress
                value={70}
                color="blue.500"
                trackColor="blue.50"
              >
                <CircularProgressLabel fontWeight="bold" color="blue.500">
                  70%
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </Flex>
  );
};

export default Assets;
