import {
  Flex,
  Stack,
  Box,
  Button,
  useToast,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { api } from '../../../services/api';
import { queryClient } from '../../../services/query/queryClient';
import { Input } from '../../Form/Input';

type FormData = {
  model: string;
  status: string;
  name: string;
  image: string;
  unitId: number;
  companyId: number;
};

interface CreateAssetFormProps {
  onCloseModal: () => any;
}

const status = ['inAlert', 'inOperation', 'inDowntime'];

export function CreateAssetForm({ onCloseModal }: CreateAssetFormProps) {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const createAsset = useMutation(
    async (data: FormData) => {
      const response = await api.post('/assets', data);

      return response.data;
    },
    {
      onSuccess: () => {
        toast({
          id: 'create-asset-success-toast',
          status: 'success',
          title: 'Success',
          description: 'Asset created',
          position: 'top-right',
        });
        queryClient.invalidateQueries('assets');
      },
      onError: () => {
        toast({
          status: 'error',
          title: 'Error',
          description: 'An error ocurred while trying to create the Asset.',
          position: 'top-right',
        });
      },
    }
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await createAsset.mutateAsync(data);
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      as="form"
      my="4"
      onSubmit={handleSubmit(onSubmit)}
      flexDir="column"
      id="create-asset-form"
    >
      <Stack w="100%" spacing="4">
        <Input
          id="asset-model-input"
          label="Model"
          {...register('model')}
          autoComplete="off"
          placeholder="Ex: motor"
        />

        <FormControl>
          <FormLabel htmlFor="status" fontSize="1.2rem">
            Status
          </FormLabel>
          <Select
            variant="filled"
            {...register('status')}
            id="asset-status-select"
          >
            {status.map((it) => (
              <option key={it} value={it}>
                {it}
              </option>
            ))}
          </Select>
        </FormControl>

        <Input
          id="asset-name-input"
          label="Name"
          {...register('name')}
          autoComplete="off"
          placeholder="Ex: Motor H13D-1"
        />
        <Input
          id="asset-image-input"
          label="Image URL"
          {...register('image')}
          autoComplete="off"
          placeholder="Ex: example.com/image.jpg"
        />
        <Input
          id="asset-unit-id-input"
          type="number"
          label="Unit ID"
          {...register('unitId')}
          autoComplete="off"
          placeholder="Ex: 1"
        />
        <Input
          id="asset-company-id-input"
          type="number"
          label="Company ID"
          {...register('companyId')}
          autoComplete="off"
          placeholder="Ex: 1"
        />
      </Stack>

      <Box mt="8" display="flex" alignItems="center" justifyContent="flex-end">
        <Button type="button" colorScheme="gray" mr="2" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button
          type="submit"
          colorScheme="green"
          isLoading={isSubmitting}
          id="create-asset-submit-button"
        >
          Save
        </Button>
      </Box>
    </Flex>
  );
}
