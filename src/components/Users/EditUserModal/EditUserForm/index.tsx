import { Flex, Stack, Box, Button, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { User } from '../../../../models/User';
import { api } from '../../../../services/api';
import { Input } from '../../../Form/Input';

interface EditUserFormProps {
  user: User;
  isEditMode: boolean;
  setEditMode: (isEditMode: boolean) => void;
}

type FormData = {
  email: string;
  name: string;
  unitId: number;
  companyId: number;
};

export function EditUserForm({
  user,
  isEditMode,
  setEditMode,
}: EditUserFormProps) {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const updateUser = useMutation(
    async (userToUpdate: User) => {
      const response = await api.put(`/users/${userToUpdate.id}`, userToUpdate);

      return response.data;
    },
    {
      onSuccess: () => {
        toast({
          status: 'success',
          title: 'Success',
          description: 'User updated',
          position: 'top-right',
        });
      },
      onError: () => {
        toast({
          status: 'error',
          title: 'Error',
          description: 'An error ocurred while trying to update the User.',
          position: 'top-right',
        });
      },
    }
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const userToUpdate: User = {
        ...user,
        ...data,
      };

      const response = await updateUser.mutateAsync(userToUpdate);
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
          defaultValue={user.name}
          isReadOnly={!isEditMode}
        />
        <Input
          label="Email"
          {...register('email')}
          defaultValue={user.email}
          isReadOnly={!isEditMode}
        />
        <Input
          type="number"
          label="Unit ID"
          {...register('unitId')}
          defaultValue={user.unitId}
          isReadOnly={!isEditMode}
        />
        <Input
          type="number"
          label="Company ID"
          {...register('companyId')}
          defaultValue={user.companyId}
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
