import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface ThemesButtonProps extends PressableProps {
  classNameBtn?: string;
  className?: string;
  children: string;
}

const ThemesButton = ({
  classNameBtn,
  className,
  children,
  ...props
}: ThemesButtonProps) => {
  return (
    <Pressable
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${classNameBtn}`}
      {...props}
    >
      <Text className={`text-white text-2xl ${className}`}>{children}</Text>
    </Pressable>
  );
};

export default ThemesButton;
