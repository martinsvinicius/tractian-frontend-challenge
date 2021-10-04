import { Flex, Stack, Box, Button, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Unit } from '../../../../models/Unit';
import { api } from '../../../../services/api';
import { Input } from '../../../Form/Input';

interface EditUnitFormProps {
  unit: Unit;
  isEditMode: boolean;
  setEditMode: (isEditMode: boolean) => void;
}

type FormData = {
  name: string;
  companyId: number;
};

export function EditUnitForm({
  unit,
  isEditMode,
  setEditMode,
}: EditUnitFormProps) {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const updateUnit = useMutation(
    async (unit: Unit) => {
      const response = await api.put(`/units/${unit.id}`, unit);

      return response.data;
    },
    {
      onSuccess: () => {
        toast({
          status: 'success',
          title: 'Success',
          description: 'Unit updated',
          position: 'top-right',
        });
      },
      onError: () => {
        toast({
          status: 'error',
          title: 'Error',
          description: 'An error ocurred while trying to update the Unit.',
          position: 'top-right',
        });
      },
    }
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const unitToUpdate: Unit = {
        ...unit,
        ...data,
      };

      const response = await updateUnit.mutateAsync(unitToUpdate);
      console.log(response);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      as="form"
      width="100%"
      flexDir="column"
      mt="4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack>
        <Input
          label="Name"
          {...register('name')}
          defaultValue={unit.name}
          isReadOnly={!isEditMode}
        />
        <Input
          type="number"
          label="Company ID"
          {...register('companyId')}
          defaultValue={unit.companyId}
          isReadOnly={!isEditMode}
        />
      </Stack>

      {isEditMode && (
        <Box
          mt="8"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            type="button"
            colorScheme="gray"
            mr="2"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </Button>
          <Button type="submit" colorScheme="green" isLoading={isSubmitting}>
            Save
          </Button>
        </Box>
      )}
    </Flex>
  );
}
