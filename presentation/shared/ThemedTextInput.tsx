import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';

interface ThemedTextInputProps extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...props }: ThemedTextInputProps) => {
  const colorScheme = useColorScheme();

  return (
    <TextInput
      className={`py-4 px-2 text-black dark:text-white ${className}`}
      placeholderTextColor={colorScheme === 'dark' ? '#a1a1aa' : '#6b7280'}
      {...props}
    />
  );
};

export default ThemedTextInput;
