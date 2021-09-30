import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="medium" color="blue.600" fontSize="large">
        {title}
      </Text>
      <Stack spacing="6" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
