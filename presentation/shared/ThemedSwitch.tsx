import React from 'react';
import { Platform, Pressable, Switch, View } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from './ThemedText';

interface ThemedSwitchProps {
  value: boolean;
  text?: string;
  className?: string;

  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({
  text,
  value,
  className,
  onValueChange,
}: ThemedSwitchProps) => {
  const switchActiveColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h3">{text}</ThemedText> : <View />}

      <Switch
        value={value}
        onValueChange={onValueChange}
        //
        thumbColor={isAndroid ? switchActiveColor : undefined}
        //
        // ios_backgroundColor={value ? switchActiveColor : 'red'}
        trackColor={{
          false: 'gray',
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
