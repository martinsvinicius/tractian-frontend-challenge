import {
  Flex,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Asset } from '../../../models/Asset';

interface AssetFormProps {
  asset: Asset;
  isEditMode: boolean;
}

type FormData = {
  model: string;
  status: any;
};

const status = ['inAlert', 'inOperation', 'inDowntime'];

export function AssetForm({ asset, isEditMode }: AssetFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
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
          >
            {status.map((it) => (
              <option key={it} value={it}>
                {it}
              </option>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Flex>
  );
}
