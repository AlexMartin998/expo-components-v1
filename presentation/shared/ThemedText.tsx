import React from 'react';
import { Text, TextProps } from 'react-native';

type ThemedTextType = 'normal' | 'h1' | 'h2' | 'h3' | 'semi-bold' | 'link';

interface ThemedTextProps extends TextProps {
  className?: string;
  type?: ThemedTextType;
}

const ThemedText = ({
  className,
  type = 'normal',
  ...props
}: ThemedTextProps) => {
  return (
    <Text
      // className="mt-10 text-3xl text-light-text dark:text-dark-text"
      className={[
        'text-light-text dark:text-dark-text',

        type === 'normal' ? 'font-normal' : undefined,
        type === 'h1' ? 'font-bold text-3xl' : undefined,
        type === 'h2' ? 'font-bold text-2xl' : undefined,
        type === 'h3' ? 'font-bold text-xl' : undefined,
        type === 'semi-bold' ? 'font-semibold' : undefined,
        type === 'link' ? 'font-normal underline' : undefined,
        className,
      ].join(' ')}
      {...props}
    />
  );
};

export default ThemedText;
