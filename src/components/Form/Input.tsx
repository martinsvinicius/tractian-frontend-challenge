import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && (
        <FormLabel htmlFor={name} id={`${name}-label`} fontSize="1.2rem">
          {label}
        </FormLabel>
      )}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="blue.500"
        bg="gray.100"
        variant="filled"
        _hover={{
          bgColor: 'gray.300',
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
