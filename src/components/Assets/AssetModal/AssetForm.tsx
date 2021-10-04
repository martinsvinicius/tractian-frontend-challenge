import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Box,
  Button,
  useToast,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Asset } from '../../../models/Asset';
import { api } from '../../../services/api';
import { Input } from '../../Form/Input';

interface AssetFormProps {
  asset: Asset;
  isEditMode: boolean;
  setEditMode: (isEditMode: boolean) => void;
}

type FormData = {
  model: string;
  status: string;
  unitId: number;
  companyId: number;
};

const status = ['inAlert', 'inOperation', 'inDowntime'];

export function AssetForm({ asset, isEditMode, setEditMode }: AssetFormProps) {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const updateAsset = useMutation(
    async (asset: Asset) => {
      const response = await api.put(`/assets/${asset.id}`, asset);

      return response.data;
    },
    {
      onSuccess: () => {
        toast({
          status: 'success',
          title: 'Success',
          description: 'Asset updated',
          position: 'top-right',
        });
      },
      onError: () => {
        toast({
          status: 'error',
          title: 'Error',
          description: 'An error ocurred while trying to update the Asset.',
          position: 'top-right',
        });
      },
    }
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const assetToUpdate: Asset = {
        ...asset,
        ...data,
      };

      await updateAsset.mutateAsync(assetToUpdate);
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
          label="Model"
          defaultValue={asset.model}
          isReadOnly={!isEditMode}
          {...register('model')}
        />

        <FormControl>
          <FormLabel htmlFor="status" fontSize="1.2rem">
            Status
          </FormLabel>
          <Select
            defaultValue={asset.status}
            variant="filled"
            {...register('status')}
            isDisabled={!isEditMode}
          >
            {status.map((it) => (
              <option key={it} value={it}>
                {it}
              </option>
            ))}
          </Select>
        </FormControl>

        <Input
          type="number"
          label="Unit ID"
          {...register('unitId')}
          autoComplete="off"
          defaultValue={asset.unitId}
          isReadOnly={!isEditMode}
        />

        <Input
          type="number"
          label="Company ID"
          {...register('companyId')}
          autoComplete="off"
          defaultValue={asset.companyId}
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
