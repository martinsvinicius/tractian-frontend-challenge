import { useToast, Flex, Stack, Box, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { api } from '../../../services/api';
import { queryClient } from '../../../services/query/queryClient';
import { Input } from '../../Form/Input';

type FormData = {
  name: string;
  companyId: number;
};

interface CreateUnitFormProps {
  onCloseModal: () => any;
}

export function CreateUnitForm({ onCloseModal }: CreateUnitFormProps) {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const createUnit = useMutation(
    async (data: FormData) => {
      const response = await api.post('/units', data);

      return response.data;
    },
    {
      onSuccess: () => {
        toast({
          status: 'success',
          title: 'Success',
          description: 'Unit created',
          position: 'top-right',
        });
        queryClient.invalidateQueries('units');
      },
      onError: () => {
        toast({
          status: 'error',
          title: 'Error',
          description: 'An error ocurred while trying to create the Unit.',
          position: 'top-right',
        });
      },
    }
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await createUnit.mutateAsync(data);
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex as="form" my="4" onSubmit={handleSubmit(onSubmit)} flexDir="column">
      <Stack w="100%" spacing="4">
        <Input
          label="Name"
          {...register('name')}
          autoComplete="off"
          placeholder="Ex: Lorem Ipsum"
        />

        <Input
          label="Company ID"
          {...register('companyId')}
          type="number"
          autoComplete="off"
          placeholder="Ex: 1"
        />
      </Stack>

      <Box mt="8" display="flex" alignItems="center" justifyContent="flex-end">
        <Button type="button" colorScheme="gray" mr="2" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button type="submit" colorScheme="green" isLoading={isSubmitting}>
          Save
        </Button>
      </Box>
    </Flex>
  );
}
